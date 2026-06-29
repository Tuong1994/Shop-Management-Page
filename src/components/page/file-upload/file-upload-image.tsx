import { useState, type FC, type ImgHTMLAttributes, type InputHTMLAttributes } from "react"
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

interface FileUploadImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  onRemove?: () => void;
}

const FileUploadImage: FC<FileUploadImageProps> = ({onRemove, ...restProps }) => {
  const { lang } = useLocale()

  const [open, setOpen] = useState<boolean>(false)

  const handleTrigger = (open: boolean) => setOpen(open)
  return (
    <div className="group absolute top-0 right-0 bottom-0 left-0 overflow-hidden rounded-md">
      <Image {...restProps} imgWidth="100%" imgHeight="100%" />
      <div
        className={cn(
          "absolute top-0 right-0 bottom-0 left-0 z-10 flex items-center justify-center bg-black/60 opacity-0 transition-opacity group-hover:opacity-100",
          open && "opacity-100"
        )}
      >
        <DropdownMenu onOpenChange={handleTrigger}>
          <DropdownMenuTrigger>
            <Camera className="text-gray-300" />
          </DropdownMenuTrigger>
          <DropdownMenuContent side="left">
            <DropdownMenuItem>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="file" className="hidden" />
                <ImageUp />
                <span>Upload photo</span>
              </label>
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer text-red-400" onClick={onRemove}>
              <Trash />
              <span>{lang.common.actions.remove}</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}

export default FileUploadImage
