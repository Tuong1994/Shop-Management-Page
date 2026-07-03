import type { FC } from "react"
import { Dialog as DialogPrimitive } from "@base-ui/react/dialog"
import ModalLayout from "@/components/page/modal-layout"
import FormLayout from "@/components/page/form-layout"
import ListFormLeft from "./list-form-left"
import ListFormRight from "./list-form-right"

interface StaffsListFormProps extends DialogPrimitive.Root.Props {}

const StaffsListForm: FC<StaffsListFormProps> = ({ ...restProps }) => {
  return (
    <ModalLayout
      {...restProps}
      header="Update staff"
      body={<FormLayout left={<ListFormLeft />} right={<ListFormRight />} />}
    />
  )
}

export default StaffsListForm
