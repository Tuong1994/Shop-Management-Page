import type { FC } from "react"
import { Dialog as DialogPrimitive } from "@base-ui/react/dialog"
import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog"
import { Field, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import useLocale from "@/locale/use-locale"
import FormLayout from "@/components/page/form-layout"

interface ProductsFormProps extends DialogPrimitive.Root.Props {}

const ProductsForm: FC<ProductsFormProps> = ({ ...restProps }) => {
  const { lang } = useLocale()

  //   export type Product = {
  //     id: string
  //     name: string;
  //     nameEn: string
  //     nameVn: string
  //     unit: EProductUnit
  //     display: EProductDisplay
  //     cost: number
  //     price: number
  //     status: ERecordStatus
  //     items: number
  //     boxes: number
  //     amount: number
  //     storageStatus: EStorageStatus
  //     supplier: string
  //     isNew: boolean
  //     isDelete: boolean
  //     categoryId: string
  //     category: Category
  //     image: Image
  //     createdAt: Date | string
  //     updatedAt: Date | string
  //   }

  return (
    <Dialog {...restProps}>
      <DialogContent className="min-w-150">
        <DialogHeader>Update form</DialogHeader>
        <FormLayout
          left={
            <>
              <div className="grid grid-cols-2 gap-2">
                <Field>
                  <FieldLabel>{lang.common.form.label.productNameEn}</FieldLabel>
                  <Input />
                </Field>
                <Field>
                  <FieldLabel>{lang.common.form.label.productNameVn}</FieldLabel>
                  <Input />
                </Field>
              </div>

              <div className="my-2 grid grid-cols-2 gap-2">
                <Field>
                  <FieldLabel>{lang.common.form.label.productNameEn}</FieldLabel>
                  <Input />
                </Field>
                <Field>
                  <FieldLabel>{lang.common.form.label.productNameVn}</FieldLabel>
                  <Input />
                </Field>
              </div>
              <div className="my-2 grid grid-cols-2 gap-2">
                <Field>
                  <FieldLabel>{lang.common.form.label.cost}</FieldLabel>
                  <Input />
                </Field>
                <Field>
                  <FieldLabel>{lang.common.form.label.price}</FieldLabel>
                  <Input />
                </Field>
              </div>
            </>
          }
          right={
            <div className="my-2 grid grid-cols-2 gap-2">
              <Field>
                <FieldLabel>{lang.common.form.label.cost}</FieldLabel>
                <Select name="storageStatus">
                  <SelectTrigger>
                    <SelectValue placeholder={lang.common.form.placeholder.storage} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Fruits</SelectLabel>
                      <SelectItem value="apple">Apple</SelectItem>
                      <SelectItem value="banana">Banana</SelectItem>
                      <SelectItem value="blueberry">Blueberry</SelectItem>
                      <SelectItem value="grapes">Grapes</SelectItem>
                      <SelectItem value="pineapple">Pineapple</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </Field>
              <Field>
                <FieldLabel>{lang.common.form.label.price}</FieldLabel>
                <Select name="storageStatus">
                  <SelectTrigger>
                    <SelectValue placeholder={lang.common.form.placeholder.storage} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Fruits</SelectLabel>
                      <SelectItem value="apple">Apple</SelectItem>
                      <SelectItem value="banana">Banana</SelectItem>
                      <SelectItem value="blueberry">Blueberry</SelectItem>
                      <SelectItem value="grapes">Grapes</SelectItem>
                      <SelectItem value="pineapple">Pineapple</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </Field>
            </div>
          }
        />
      </DialogContent>
    </Dialog>
  )
}

export default ProductsForm
