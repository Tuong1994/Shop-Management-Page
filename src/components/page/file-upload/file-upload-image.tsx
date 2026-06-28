import type { FC } from "react"
import { Camera } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Image from "../image"

interface FileUploadImageProps {}

const FileUploadImage: FC<FileUploadImageProps> = () => {
  return (
    <div className="group relative h-full w-full overflow-hidden rounded-md">
      <Image imgWidth="100%" imgHeight="100%" />
      <div className="absolute top-0 right-0 bottom-0 left-0 z-10 flex items-center justify-center bg-black/60 opacity-0 transition-opacity group-hover:opacity-100">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Camera className="text-gray-300" />
          </DropdownMenuTrigger>
          <DropdownMenuContent side="left">
            <DropdownMenuItem>Upload photo</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}

export default FileUploadImage
