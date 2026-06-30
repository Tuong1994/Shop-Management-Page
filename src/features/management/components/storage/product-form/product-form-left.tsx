import type { FC } from "react"
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
import FileUpload from "@/components/page/file-upload"
import useLocale from "@/locale/use-locale"

interface ProductFormLeftProps {}

const ProductFormLeft: FC<ProductFormLeftProps> = () => {
  const { lang } = useLocale()

  const groupClassName = "grid grid-cols-1 gap-2 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2"

  return (
    <>
      <FieldGroup className="grid grid-cols-1 gap-2 xs:grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3">
        <FileUpload
          className="col-span-1"
          defaultImage="https://www.equinetmedia.com/hubfs/How-to-find-b2b-blog-images.png"
        />
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

      <FieldSeparator className="my-4">{lang.management.storage.productForm.pricing}</FieldSeparator>
      <FieldGroup className={groupClassName}>
        <Field>
          <FieldLabel>{lang.common.form.label.cost}</FieldLabel>
          <Input placeholder={lang.common.form.placeholder.unit} />
        </Field>
        <Field>
          <FieldLabel>{lang.common.form.label.price}</FieldLabel>
          <Input placeholder={lang.common.form.placeholder.unit} />
        </Field>
      </FieldGroup>

      <FieldSeparator className="my-4">{lang.management.storage.productForm.storage}</FieldSeparator>
      <FieldGroup className={groupClassName}>
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
  )
}

export default ProductFormLeft
