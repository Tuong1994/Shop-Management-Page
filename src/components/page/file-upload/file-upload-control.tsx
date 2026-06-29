import { forwardRef, type ForwardRefRenderFunction, type InputHTMLAttributes } from "react"
import { ImagePlus } from "lucide-react"
import { TextMuted } from "@/components/ui/typography"
import { Spinner } from "@/components/ui/spinner"
import { cn } from "@/lib/utils"
import useLocale from "@/locale/use-locale"

interface FileUploadControlProps extends InputHTMLAttributes<HTMLInputElement> {
  isLoading?: boolean
}

const FileUploadControl: ForwardRefRenderFunction<HTMLInputElement, FileUploadControlProps> = (
  { className, isLoading, ...restProps },
  ref
) => {
  const { lang } = useLocale()

  return (
    <label
      className={cn(
        "flex h-full w-full cursor-pointer flex-col items-center justify-center gap-1 rounded-md border-2 border-dashed transition-colors hover:bg-gray-50",
        className
      )}
    >
      {!isLoading ? (
        <>
          <input ref={ref} {...restProps} type="file" className="hidden" />
          <ImagePlus className="text-gray-300" />
          <TextMuted className="text-xs">{lang.common.actions.add}</TextMuted>
        </>
      ) : (
        <Spinner className="size-6 text-gray-300" />
      )}
    </label>
  )
}

export default forwardRef(FileUploadControl)
