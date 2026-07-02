import type { FC } from "react"
import { Dialog as DialogPrimitive } from "@base-ui/react/dialog"
import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog"
import InfoRow from "@/components/page/info-row"
import useLocale from "@/locale/use-locale"

interface HiringCardModalProps extends DialogPrimitive.Root.Props {}

const HiringCardModal: FC<HiringCardModalProps> = ({ ...restProps }) => {
  const { lang } = useLocale()

  return (
    <Dialog {...restProps}>
      <DialogContent>
        <DialogHeader>Candidate profile</DialogHeader>
        <div className="">
          <InfoRow name={lang.common.form.label.fullName} descript="Cadidate name" />
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default HiringCardModal
