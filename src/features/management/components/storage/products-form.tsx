import type { FC } from "react"
import { Dialog as DialogPrimitive } from "@base-ui/react/dialog"
import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog"
import { Field, FieldGroup, FieldLabel, FieldSeparator } from "@/components/ui/field"
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
import InfoRow from "@/components/page/info-row"
import FormLayout from "@/components/page/form-layout"
import FileUpload from "@/components/page/file-upload"
import useLocale from "@/locale/use-locale"

interface ProductsFormProps extends DialogPrimitive.Root.Props {}

const ProductsForm: FC<ProductsFormProps> = ({ ...restProps }) => {
  const { lang } = useLocale()

  return (
    <Dialog {...restProps}>
      <DialogContent className="min-w-200">
        <DialogHeader className="text-lg font-bold">Update form</DialogHeader>
        <FormLayout
          left={
            <>
              <FieldGroup className="grid grid-cols-3 gap-2">
                <FileUpload className="col-span-1" />
                <div className="col-span-2">
                  <Field>
                    <FieldLabel>{lang.common.form.label.productNameEn}</FieldLabel>
                    <Input />
                  </Field>
                  <Field>
                    <FieldLabel>{lang.common.form.label.productNameVn}</FieldLabel>
                    <Input />
                  </Field>
                </div>
              </FieldGroup>

              <FieldSeparator className="my-4">Pricing</FieldSeparator>
              <FieldGroup className="grid grid-cols-2 gap-2">
                <Field>
                  <FieldLabel>{lang.common.form.label.cost}</FieldLabel>
                  <Input placeholder={lang.common.form.placeholder.unit} />
                </Field>
                <Field>
                  <FieldLabel>{lang.common.form.label.price}</FieldLabel>
                  <Input placeholder={lang.common.form.placeholder.unit} />
                </Field>
              </FieldGroup>

              <FieldSeparator className="my-4">Storage</FieldSeparator>
              <FieldGroup className="my-2 grid grid-cols-2 gap-2">
                <Field>
                  <FieldLabel>{lang.common.form.label.items}</FieldLabel>
                  <Input />
                </Field>
                <Field>
                  <FieldLabel>{lang.common.form.label.boxes}</FieldLabel>
                  <Input />
                </Field>
                <Field>
                  <FieldLabel>{lang.common.form.label.storageStatus}</FieldLabel>
                  <Select name="storageStatus">
                    <SelectTrigger>
                      <SelectValue placeholder={lang.common.form.placeholder.display} />
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
                <InfoRow
                  className="mt-8 justify-end gap-2"
                  name={lang.common.form.label.amount + ":"}
                  descript="800"
                  descriptProps={{ className: "text-[16px] font-bold" }}
                />
              </FieldGroup>
            </>
          }
          right={
            <>
              <FieldGroup className="gap-2">
                <Field>
                  <FieldLabel>{lang.common.form.label.supplier}</FieldLabel>
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
                  <FieldLabel>{lang.common.form.label.category}</FieldLabel>
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
                  <FieldLabel>{lang.common.form.label.status}</FieldLabel>
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
              </FieldGroup>

              <FieldSeparator className="my-4" />
              <FieldGroup className="gap-2">
                <Field>
                  <FieldLabel>{lang.common.form.label.unit}</FieldLabel>
                  <Select name="storageStatus">
                    <SelectTrigger>
                      <SelectValue placeholder={lang.common.form.placeholder.unit} />
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
                  <FieldLabel>{lang.common.form.label.display}</FieldLabel>
                  <Select name="storageStatus">
                    <SelectTrigger>
                      <SelectValue placeholder={lang.common.form.placeholder.display} />
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
              </FieldGroup>
            </>
          }
        />
      </DialogContent>
    </Dialog>
  )
}

export default ProductsForm
