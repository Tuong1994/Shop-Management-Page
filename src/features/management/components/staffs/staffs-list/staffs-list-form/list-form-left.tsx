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
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import FileUpload from "@/components/page/file-upload"
import useLocale from "@/locale/use-locale"

interface ListFormLeftProps {}

const ListFormLeft: FC<ListFormLeftProps> = () => {
  const { lang } = useLocale()

  const groupClassName = "grid grid-cols-1 gap-2 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2"

  return (
    <>
      <FieldGroup className="grid grid-cols-1 gap-2 xs:grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3">
        <FileUpload className="col-span-1" />
        <div className="col-span-2">
          <Field className="mb-4">
            <FieldLabel>{lang.common.form.label.email}</FieldLabel>
            <Input placeholder={lang.common.form.placeholder.enter} />
          </Field>
          <Button variant="destructive">Change password</Button>
        </div>
      </FieldGroup>

      <FieldSeparator className="my-4">General</FieldSeparator>
      <FieldGroup className={groupClassName}>
        <Field>
          <FieldLabel>{lang.common.form.label.firstName}</FieldLabel>
          <Input placeholder={lang.common.form.placeholder.enter} />
        </Field>
        <Field>
          <FieldLabel>{lang.common.form.label.lastName}</FieldLabel>
          <Input placeholder={lang.common.form.placeholder.enter} />
        </Field>
        <Field>
          <FieldLabel>{lang.common.form.label.phone}</FieldLabel>
          <Input placeholder={lang.common.form.placeholder.enter} />
        </Field>
        <Field>
          <FieldLabel>{lang.common.form.label.gender}</FieldLabel>
          <Select name="gender">
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
          <FieldLabel>{lang.common.form.label.birthday}</FieldLabel>
          <Input placeholder={lang.common.form.placeholder.enter} />
        </Field>
        <Field>
          <FieldLabel>{lang.common.form.label.role}</FieldLabel>
          <Select name="role">
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

      <FieldSeparator className="my-4">Permission</FieldSeparator>
      <div className="grid grid-cols-1 gap-2 xs:grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3">
        <div className="flex items-center gap-2">
          <Switch />
          <FieldLabel>Create</FieldLabel>
        </div>
        <div className="flex items-center gap-2">
          <Switch />
          <FieldLabel>Update</FieldLabel>
        </div>
        <div className="flex items-center gap-2">
          <Switch />
          <FieldLabel>Remove</FieldLabel>
        </div>
      </div>
    </>
  )
}

export default ListFormLeft
