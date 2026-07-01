import type { FC } from "react"
import ModalForm from "@/components/page/modal-form"
import FormLayout from "@/components/page/form-layout"
import ProductFormLeft from "./product-form-left"
import ProductFormRight from "./product-form-right"
import useLocale from "@/locale/use-locale"

interface ProductsFormProps extends DialogPrimitive.Root.Props {}

const ProductsForm: FC<ProductsFormProps> = ({ ...restProps }) => {
  const { lang } = useLocale()

  return (
    <ModalForm {...restProps} header={lang.management.storage.productForm.title}>
      <FormLayout left={<ProductFormLeft />} right={<ProductFormRight />} />
    </ModalForm>
  )
}

export default ProductsForm
