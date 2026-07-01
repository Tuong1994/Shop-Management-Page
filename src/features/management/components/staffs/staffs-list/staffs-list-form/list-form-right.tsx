import type { FC } from "react"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
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

interface ListFormRightProps {}

const ListFormRight: FC<ListFormRightProps> = () => {
  const { lang } = useLocale()

  const groupClassName = "grid gap-2 xs:grid-cols-2 sm:grid-cols-2 md:flex lg:flex"

  return (
    <FieldGroup className={groupClassName}>
      <Field>
        <FieldLabel>{lang.common.form.label.address_en}</FieldLabel>
        <Input placeholder={lang.common.form.placeholder.enter} />
      </Field>
      <Field>
        <FieldLabel>{lang.common.form.label.address_vn}</FieldLabel>
        <Input placeholder={lang.common.form.placeholder.enter} />
      </Field>
      <Field>
        <FieldLabel>{lang.common.form.label.ward}</FieldLabel>
        <Select name="ward">
          <SelectTrigger>
            <SelectValue placeholder={lang.common.form.placeholder.select} />
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
        <FieldLabel>{lang.common.form.label.district}</FieldLabel>
        <Select name="district">
          <SelectTrigger>
            <SelectValue placeholder={lang.common.form.placeholder.select} />
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
        <FieldLabel>{lang.common.form.label.city}</FieldLabel>
        <Select name="city">
          <SelectTrigger>
            <SelectValue placeholder={lang.common.form.placeholder.select} />
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
  )
}

export default ListFormRight
