import type { FC } from "react"
import { Dialog as DialogPrimitive } from "@base-ui/react/dialog"
import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog"
import FormLayout from "@/components/page/form-layout"
import ProductFormLeft from "./product-form-left"
import ProductFormRight from "./product-form-right"
import useLocale from "@/locale/use-locale"

interface ProductsFormProps extends DialogPrimitive.Root.Props {}

const ProductsForm: FC<ProductsFormProps> = ({ ...restProps }) => {
  const { lang } = useLocale()

  return (
    <Dialog {...restProps}>
      <DialogContent className="p-0 py-2 md:min-w-150 lg:min-w-200">
        <DialogHeader className="p-4 pb-0 text-lg font-bold">{lang.management.storage.productForm.title}</DialogHeader>
        <div className="no-scrollbar max-h-[70vh] overflow-y-auto p-4 pt-1.5 lg:max-h-full lg:overflow-y-visible">
          <FormLayout left={<ProductFormLeft />} right={<ProductFormRight />} />
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default ProductsForm
