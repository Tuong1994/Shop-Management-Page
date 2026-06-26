import { useState, type ChangeEvent, type FC } from "react"
import type { ApiQuery } from "@/lib/axios/type"
import { Field, FieldGroup } from "@/components/ui/field"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import useLocale from "@/locale/use-locale"
import type { EGender, ERole } from "@/models/user/user.enum"

interface StaffsListFilterFormProps {
  onCancel?: () => void
}

const StaffsListFilterForm: FC<StaffsListFilterFormProps> = ({ onCancel }) => {
  const initialQuery: ApiQuery = {
    keywords: "",
    gender: null,
    role: null,
  }

  const { lang } = useLocale()

  const [apiQuery, setApiQuery] = useState<ApiQuery>(initialQuery)

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setApiQuery((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSelect = <T = unknown,>(fieldName: keyof ApiQuery, value: T) => {
    setApiQuery((prev) => ({
      ...prev,
      [fieldName]: value,
    }))
  }

  const handleFilter = (formData: FormData) => {
    console.log(apiQuery)
  }

  const handleCancel = () => {
    setApiQuery(initialQuery)
    onCancel?.()
  }

  return (
    <form className="w-full" action={handleFilter}>
      <FieldGroup className="grid grid-cols-1 gap-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-8">
        <Field className="w-full">
          <InputGroup>
            <InputGroupInput
              name="keywords"
              placeholder={`${lang.common.form.placeholder.search}...`}
              value={apiQuery.keywords}
              onChange={handleChangeInput}
            />
            <InputGroupAddon align="inline-end">
              <Search />
            </InputGroupAddon>
          </InputGroup>
        </Field>

        <Field>
          <Select
            name="display"
            value={apiQuery.gender}
            onValueChange={(value) => handleSelect<EGender| null>("gender", value)}
          >
            <SelectTrigger>
              <SelectValue placeholder={lang.common.form.placeholder.gender} />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Genders</SelectLabel>
                <SelectItem value="male">Male</SelectItem>
                <SelectItem value="female">Female</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </Field>

        <Field>
          <Select
            name="unit"
            value={apiQuery.role}
            onValueChange={(value) => handleSelect<ERole | null>("role", value)}
          >
            <SelectTrigger>
              <SelectValue placeholder={lang.common.form.placeholder.role} />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Fruits</SelectLabel>
                <SelectItem value="manager">Manager</SelectItem>
                <SelectItem value="leader">Leader</SelectItem>
                <SelectItem value="staff">Staff</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </Field>

        <Field orientation="horizontal">
          <Button type="submit">{lang.common.actions.filter}</Button>
          <Button variant="outline" type="button" onClick={handleCancel}>
            {lang.common.actions.cancel}
          </Button>
        </Field>
      </FieldGroup>
    </form>
  )
}

export default StaffsListFilterForm
