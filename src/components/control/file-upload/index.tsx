import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
  type ChangeEvent,
  type DragEvent,
  type ForwardRefRenderFunction,
  type InputHTMLAttributes,
} from "react"
import { REPLACE_NUM_REGEX, REPLACE_TYPE_REGEX } from "@/common/regex"
import FileUploadControl from "./file-upload-control"
import FileUploadImage from "./file-upload-image"
import useLocale from "@/locale/use-locale"

export const ACCEPT_IMAGE_FILE_TYPE = ["image/png", "image/jpg", "image/jpeg"]

export const DEFAULT_FILE_SIZE = 1024 * 1024 * 2

interface FileUploadProps extends InputHTMLAttributes<HTMLInputElement> {
  fileSize?: number
  defaultImage?: string
  controlClassName?: string
  onUpload?: (file: File | null) => void
}

const FileUpload: ForwardRefRenderFunction<HTMLInputElement, FileUploadProps> = (
  {
    controlClassName,
    defaultImage = "",
    accept = ACCEPT_IMAGE_FILE_TYPE.join(","),
    fileSize = DEFAULT_FILE_SIZE,
    onUpload,
    ...restProps
  },
  ref
) => {
  const { lang } = useLocale()

  const [file, setFile] = useState<File | null>(null)

  const [image, setImage] = useState<string>("")

  const [isLoading, setIsLoading] = useState<boolean>(false)

  const [isDragging, setIsDragging] = useState<boolean>(false)

  const [error, setError] = useState<string | null>(null)

  const inputRef = useRef<HTMLInputElement>(null)

  useImperativeHandle(ref, () => inputRef.current as HTMLInputElement)

  useEffect(() => {
    if (defaultImage) setImage(defaultImage)
  }, [defaultImage])

  useEffect(() => {
    if (!file) return
    const reader = new FileReader()
    reader.onloadstart = () => setIsLoading(true)
    reader.onloadend = () => {
      setImage(reader.result as string)
      setIsLoading(false)
    }
    reader.readAsDataURL(file)
    setError(null)
  }, [file])

  const handleUpload = (file: File) => {
    if (!file.type || !accept.includes(file.type)) {
      const types = accept.split(",").map((type) => type.replace("image/", ""))
      return setError(lang.common.form.others.fileType.replace(REPLACE_TYPE_REGEX, `${types.join(", ")}`))
    }
    if (file.size > fileSize) {
      return setError(
        lang.common.form.others.fileSize.replace(REPLACE_NUM_REGEX, `${fileSize / (1024 * 1024)}`)
      )
    }
    setFile(file)
  }

  const handleRemove = () => {
    setImage("")
    if (!inputRef.current || !file) return
    const inputFiles = inputRef.current.files
    if (!inputFiles) return
    const dataTransfer = new DataTransfer()
    Array.from(inputFiles)
      .filter((f) => !(f.name === file.name && f.size === file.size && f.lastModified === file.lastModified))
      .forEach((f) => dataTransfer.items.add(f))
    inputRef.current.files = dataTransfer.files
    setFile(null)
    onUpload?.(null)
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null
    if (file) {
      handleRemove()
      handleUpload(file)
      onUpload?.(file)
    }
  }

  const handleDrag = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") setIsDragging(true)
    else if (e.type === "dragleave") setIsDragging(false)
  }

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)
    if (e.dataTransfer.files && e.dataTransfer.files[0]) handleUpload(e.dataTransfer.files[0])
  }

  const handleReUpload = () => inputRef.current?.click()

  return (
    <div className="flex flex-col items-center">
      <div
        className="relative h-25 w-25"
        onDragEnter={handleDrag}
        onDragOver={handleDrag}
        onDragLeave={handleDrag}
        onDrop={handleDrop}
      >
        <FileUploadControl
          ref={inputRef}
          {...restProps}
          accept={accept}
          isLoading={isLoading}
          isDragging={isDragging}
          className={controlClassName}
          onChange={handleChange}
        />
        {image && (
          <FileUploadImage src={image} accept={accept} onUpload={handleReUpload} onRemove={handleRemove} />
        )}
      </div>
      {error && <div className="mt-4 text-red-400">{error}</div>}
    </div>
  )
}

export default forwardRef(FileUpload)
