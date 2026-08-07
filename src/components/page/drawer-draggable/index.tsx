import Draggable, { type DraggableProps } from "react-draggable"
import { useRef, type FC, type ReactNode } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils" // nếu bạn dùng shadcn
import { X } from "lucide-react"
import { useRender } from "@/hooks"

interface DrawerDraggaleProps {
  children?: ReactNode
  className?: string
  open?: boolean
  disabled?: DraggableProps["disabled"]
  position?: DraggableProps["position"]
  onDrag?: DraggableProps["onDrag"]
  onClose?: () => void
}

const DrawerDraggale: FC<DrawerDraggaleProps> = ({
  children,
  className,
  position,
  disabled,
  open = false,
  onDrag,
  onClose,
}) => {
  const nodeRef = useRef(null)

  const render = useRender(open)

  return (
    render && (
      <Draggable cancel="button" bounds="body" position={position} nodeRef={nodeRef} disabled={disabled} onDrag={onDrag}>
        <div
          ref={nodeRef}
          className={cn(
            "fixed bottom-0 z-50 mx-auto w-full p-2 opacity-0",
            !disabled && "cursor-grab active:cursor-grabbing",
            open && "animate-fade opacity-100 transition-opacity",
            className
          )}
        >
          <div
            className={cn(
              "rounded-[20px] bg-background border shadow-lg p-2.5",
              "transition-transform duration-300 ease-out",
              "bottom-0 translate-y-full",
              open && "bottom-0 translate-y-0 animate-slide-in-up"
            )}
          >
            <div className="flex items-center justify-end gap-4 border rounded-[20px] px-2.5 py-1">
              {children}
              <Button variant="outline" className="w-8 h-8" onClick={onClose}>
                <X className="size-3" />
              </Button>
            </div>
          </div>
        </div>
      </Draggable>
    )
  )
}

export default DrawerDraggale
