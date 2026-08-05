import Draggable, { type DraggableProps } from "react-draggable"
import { useRef, type FC, type ReactNode } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils" // nếu bạn dùng shadcn
import { useRender } from "@/hooks"
import { X } from "lucide-react"

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
      <Draggable bounds="body" position={position} nodeRef={nodeRef} disabled={disabled} onDrag={onDrag}>
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
              "rounded-[20px] bg-background border shadow-lg",
              "transition-transform duration-300 ease-out",
              "bottom-0 translate-y-full",
              open && "bottom-0 translate-y-0 animate-slide-in-up"
            )}
          >
            <div className="flex items-center justify-end px-2 pt-2">
              <Button variant="outline" onClick={onClose}>
                <X />
              </Button>
            </div>

            <div className="px-2">{children}</div>
          </div>
        </div>
      </Draggable>
    )
  )
}

export default DrawerDraggale
