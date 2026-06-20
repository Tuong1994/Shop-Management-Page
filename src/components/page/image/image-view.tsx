import { type CSSProperties, type ForwardRefRenderFunction, useState, forwardRef } from "react"
import type { ImageProps } from "."
import { cn } from "@/lib/utils"
import { AiOutlineEye } from "react-icons/ai"
import { BsTrash } from "react-icons/bs"
import { Checkbox } from "@/components/ui/checkbox"
import ImageViewPopup from "./image-popup"

type ViewImage = {
  url: string
  open: boolean
}

interface ImageViewProps extends ImageProps {
  checked: boolean
  handleCheck: (checked: boolean) => void
  imageSize: () => CSSProperties
}

const ImageView: ForwardRefRenderFunction<HTMLImageElement, ImageViewProps> = (
  {
    imageSize,
    src = "",
    checked,
    hasView,
    hasRemove,
    hasCheck,
    onRemove,
    handleCheck,
    ...restProps
  },
  ref
) => {
  const [popup, setPopup] = useState<ViewImage>({ url: "", open: false })

  const viewCheckedClassName = checked ? "group-view-checked" : ""

  const checkedClassName = checked ? "group-check-checked" : ""

  return (
    <div style={imageSize()} className="image-group">
      <img
        ref={ref}
        style={imageSize()}
        {...restProps}
        src={src}
        className={`group-view ${viewCheckedClassName}`}
      />

      {hasView && (
        <div className="group-actions">
          <AiOutlineEye
            size={20}
            className="actions-icon"
            onClick={() => setPopup({ ...popup, url: src, open: true })}
          />
          {hasRemove && <BsTrash size={20} className="actions-icon" onClick={onRemove} />}
        </div>
      )}

      {hasCheck && (
        <Checkbox
          checked={checked}
          className={cn("group-check", checkedClassName)}
          onCheckedChange={handleCheck}
        />
      )}

      <ImageViewPopup open={popup.open} url={popup.url} onClose={() => setPopup({ ...popup, open: false })} />
    </div>
  )
}

export default forwardRef(ImageView)
