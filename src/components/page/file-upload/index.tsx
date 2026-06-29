import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
  type ChangeEvent,
  type ForwardRefRenderFunction,
  type InputHTMLAttributes,
} from "react"
import type { UploadError } from "./type"
import { EFile } from "./enum"
import FileUploadControl from "./file-upload-control"
import FileUploadImage from "./file-upload-image"
import useLocale from "@/locale/use-locale"
import { REPLACE_NUM_REGEX, REPLACE_TYPE_REGEX } from "@/common/regex"

export const ACCEPT_IMAGE_FILE_TYPE = ["image/png", "image/jpg", "image/jpeg"]

export const DEFAULT_FILE_SIZE = 1024 * 1024 * 2

interface FileUploadProps extends InputHTMLAttributes<HTMLInputElement> {
  fileSize?: number
  controlClassName?: string
}

const FileUpload: ForwardRefRenderFunction<HTMLInputElement, FileUploadProps> = (
  { controlClassName, accept = ACCEPT_IMAGE_FILE_TYPE.join(","), fileSize = DEFAULT_FILE_SIZE, ...restProps },
  ref
) => {
  const { lang } = useLocale()

  const [file, setFile] = useState<File | null>(null)

  const [image, setImage] = useState<string>("")

  const [isLoading, setIsLoading] = useState<boolean>(false)

  const [error, setError] = useState<UploadError | null>(null)

  const inputRef = useRef<HTMLInputElement>(null)

  useImperativeHandle(ref, () => inputRef.current as HTMLInputElement)

  useEffect(() => {
    if (!file) return
    const reader = new FileReader()
    reader.onloadstart = () => setIsLoading(true)
    reader.onloadend = () => {
      setImage(reader.result as string)
      setIsLoading(false)
      setError(null)
    }
    reader.readAsDataURL(file)
  }, [file])

  const handleUpload = (file: File) => {
    if (!accept.includes(file.type)) {
      const types = accept.split(",").map((type) => type.replace("image/", ""))
      return setError({
        type: EFile.TYPE,
        message: lang.common.form.others.fileType.replace(REPLACE_TYPE_REGEX, `${types.join(", ")}`),
      })
    }
    if (file.size > fileSize) return setError({type: EFile.SIZE, message: ""})
    setFile(file)
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null
    if (file) handleUpload(file)
  }

  const handleRemove = () => {
    if (!inputRef.current || !file) return
    const inputFiles = inputRef.current.files
    if (!inputFiles) return
    const dataTransfer = new DataTransfer()
    Array.from(inputFiles)
      .filter((f) => !(f.name === file.name && f.size === file.size && f.lastModified === file.lastModified))
      .forEach((f) => dataTransfer.items.add(f))
    inputRef.current.files = dataTransfer.files
    setImage("")
    setFile(null)
  }

  return (
    <>
      <div className="relative h-25 w-25">
        <FileUploadControl
          ref={inputRef}
          {...restProps}
          accept={accept}
          isLoading={isLoading}
          className={controlClassName}
          onChange={handleChange}
        />
        {image && <FileUploadImage src={image} onRemove={handleRemove} />}
      </div>
    </>
  )
}

export default forwardRef(FileUpload)
