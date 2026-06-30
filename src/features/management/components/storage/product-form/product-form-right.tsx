import type { FC } from "react"
import { Field, FieldGroup, FieldLabel, FieldSeparator } from "@/components/ui/field"
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

interface ProductFormRightProps {}

const ProductFormRight: FC<ProductFormRightProps> = () => {
  const { lang } = useLocale()

  const groupClassName = "grid gap-2 xs:grid-cols-2 sm:grid-cols-2 md:flex lg:flex"

  return (
    <>
      <FieldGroup className={groupClassName}>
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
      <FieldGroup className={groupClassName}>
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
  )
}

export default ProductFormRight