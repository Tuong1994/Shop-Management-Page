import {
  forwardRef,
  useEffect,
  useState,
  type ChangeEvent,
  type ForwardRefRenderFunction,
  type InputHTMLAttributes,
} from "react"
import FileUploadControl from "./file-upload-control"
import FileUploadImage from "./file-upload-image"

interface FileUploadProps extends InputHTMLAttributes<HTMLInputElement> {
  controlClassName?: string
}

const FileUpload: ForwardRefRenderFunction<HTMLInputElement, FileUploadProps> = (
  { controlClassName, ...restProps },
  ref
) => {
  const [file, setFile] = useState<File | null>(null)

  const [image, setImage] = useState<string>("")

  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    if (!file) return
    const reader = new FileReader()
    reader.onloadstart = () => setIsLoading(true)
    reader.onloadend = () => {
      setImage(reader.result as string)
      setIsLoading(false)
    }
    reader.readAsDataURL(file)
  }, [file])

  const handleUpload = (file: File) => {
    setFile(file)
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null
    if(file) handleUpload(file)
  }

  return (
    <>
      <div className="h-25 w-25">
        {!image ? (
          <FileUploadControl
            ref={ref}
            {...restProps}
            isLoading={isLoading}
            className={controlClassName}
            onChange={handleChange}
          />
        ) : (
          <FileUploadImage />
        )}
      </div>
    </>
  )
}

export default forwardRef(FileUpload)
