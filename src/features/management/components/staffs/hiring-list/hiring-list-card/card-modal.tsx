import type { FC } from "react";
import { Dialog as DialogPrimitive } from "@base-ui/react/dialog";
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface HiringCardModalProps extends DialogPrimitive.Root.Props {}

const HiringCardModal: FC<HiringCardModalProps> = ({...restProps}) => {
    return <Dialog {...restProps}>
        <DialogContent></DialogContent>
    </Dialog>
}

export default HiringCardModal