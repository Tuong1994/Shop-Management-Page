import type { FC } from "react"
import { Dialog as DialogPrimitive } from "@base-ui/react/dialog"
import { Separator } from "@/components/ui/separator"
import { Paragraph } from "@/components/ui/typography"
import Image from "@/components/page/image"
import InfoRow from "@/components/page/info-row"
import ModalLayout from "@/components/page/modal-layout"
import useLocale from "@/locale/use-locale"

interface HiringCardModalProps extends DialogPrimitive.Root.Props {}

const HiringCardModal: FC<HiringCardModalProps> = ({ ...restProps }) => {
  const { lang } = useLocale()

  return (
    <ModalLayout
      {...restProps}
      header="Candidate profile"
      body={
        <div className="flex flex-wrap md:flex-nowrap lg:flex-nowrap gap-2">
          <div className="rounded-[20px] bg-primary p-2 text-white basis-1/1 md:basis-1/2 lg:basis-1/2">
            <div className="flex justify-center">
              <Image size="sm" rootClassName="rounded-[20px] overflow-hidden" />
            </div>
            <Separator className="my-4" />
            <InfoRow hasColon name={lang.common.form.label.fullName} descript="Cadidate name" />
            <InfoRow hasColon name={lang.common.form.label.email} descript="Cadidate email" />
            <InfoRow hasColon name={lang.common.form.label.phone} descript="Cadidate phone" />
            <InfoRow hasColon name={lang.common.form.label.birthday} descript="Cadidate birthday" />
            <InfoRow hasColon name={lang.common.form.label.fullAddress} descript="Cadidate address" />
          </div>

          <Separator orientation="vertical" className="mx-3 hidden md:block lg:block" />

          <div className="basis-1/1">
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut in perferendis voluptatem officia
              dolorem ipsa doloribus doloremque voluptate at. Sed?
            </Paragraph>
          </div>
        </div>
      }
    />
  )
}

export default HiringCardModal
