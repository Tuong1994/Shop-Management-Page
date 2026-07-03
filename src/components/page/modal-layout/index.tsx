import type { FC, ReactNode } from "react"
import { Dialog as DialogPrimitive } from "@base-ui/react/dialog"
import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog"

interface ModalLayoutProps extends DialogPrimitive.Root.Props {
  header?: ReactNode
  body?: ReactNode;
}

const ModalLayout: FC<ModalLayoutProps> = ({ body, header, ...restProps }) => {
  return (
    <Dialog {...restProps}>
      <DialogContent className="p-0 py-2 md:min-w-150 lg:min-w-200">
        <DialogHeader className="p-4 pb-0 text-lg font-bold">{header}</DialogHeader>
        <div className="no-scrollbar max-h-[70vh] overflow-y-auto p-4 pt-1.5 lg:max-h-full lg:overflow-y-visible">
          {body}
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default ModalLayout
