import { useState, type ChangeEvent, type FC, type ImgHTMLAttributes, useRef } from "react"
import { Camera, ImageUp, Trash } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"
import Image from "../image"
import useLocale from "@/locale/use-locale"
import { ACCEPT_IMAGE_FILE_TYPE } from "."

interface FileUploadImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  accept?: string
  onRemove?: () => void
  onUpload?: (e: ChangeEvent<HTMLInputElement>) => void
}

const FileUploadImage: FC<FileUploadImageProps> = ({
  accept = ACCEPT_IMAGE_FILE_TYPE.join(","),
  onUpload,
  onRemove,
  ...restProps
}) => {
  const { lang } = useLocale()
  const [open, setOpen] = useState<boolean>(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleTrigger = (open: boolean) => setOpen(open)

  const handleUploadClick = () => fileInputRef.current?.click()

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => onUpload?.(e)

  return (
    <div className="group absolute top-0 right-0 bottom-0 left-0 overflow-hidden rounded-md">
      <Image {...restProps} imgWidth="100%" imgHeight="100%" />

      {/* Input file nằm ngoài dropdown */}
      <input ref={fileInputRef} type="file" className="hidden" accept={accept} onChange={handleFileChange} />

      <div
        className={cn(
          "absolute inset-0 z-10 flex items-center justify-center bg-black/60 opacity-0 transition-opacity group-hover:opacity-100",
          open && "opacity-100"
        )}
      >
        <DropdownMenu onOpenChange={handleTrigger}>
          <DropdownMenuTrigger>
            <Camera className="cursor-pointer text-gray-300" />
          </DropdownMenuTrigger>

          <DropdownMenuContent side="left" align="start">
            <DropdownMenuItem onClick={handleUploadClick} className="flex cursor-pointer items-center gap-2">
              <ImageUp className="h-4 w-4" />
              <span>Upload photo</span>
            </DropdownMenuItem>

            <DropdownMenuItem className="cursor-pointer text-red-400 focus:text-red-400" onClick={onRemove}>
              <Trash className="h-4 w-4" />
              <span>{lang.common.actions.remove}</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}

export default FileUploadImage
