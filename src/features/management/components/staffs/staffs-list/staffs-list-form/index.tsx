import type { FC } from "react"
import { Dialog as DialogPrimitive } from "@base-ui/react/dialog"
import ModalLayout from "@/components/page/modal-layout"
import FormLayout from "@/components/page/form-layout"
import ListFormLeft from "./list-form-left"
import ListFormRight from "./list-form-right"
import useLocale from "@/locale/use-locale"

interface StaffsListFormProps extends DialogPrimitive.Root.Props {}

const StaffsListForm: FC<StaffsListFormProps> = ({ ...restProps }) => {
  const { lang } = useLocale()

  return (
    <ModalLayout
      {...restProps}
      header={lang.management.hiring.staffForm.title}
      body={<FormLayout left={<ListFormLeft />} right={<ListFormRight />} />}
    />
  )
}

export default StaffsListForm
