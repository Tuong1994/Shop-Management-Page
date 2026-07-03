import { useState, type ChangeEvent, type FC } from "react"
import type { ApiQuery } from "@/lib/axios/type"
import type { ProductDataTable } from "@/models/product/product.type"
import type { Table } from "@tanstack/react-table"
import type { EProductDisplay, EProductUnit, EStorageStatus } from "@/models/product/product.enum"
import type { ERecordStatus } from "@/models/common.enum"
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

interface ProductsFilterProps {
  table: Table<ProductDataTable>
  onCancel?: () => void
}

const ProductsFilter: FC<ProductsFilterProps> = ({ table, onCancel }) => {
  const initialQuery: ApiQuery = {
    keywords: "",
    categoryId: "",
    supplier: "",
    display: null,
    unit: null,
    status: null,
    storageStatus: null,
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
      <FieldGroup className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-8">
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
            value={apiQuery.display}
            onValueChange={(value) => handleSelect<EProductDisplay | null>("display", value)}
          >
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

        <Field>
          <Select
            name="unit"
            value={apiQuery.unit}
            onValueChange={(value) => handleSelect<EProductUnit | null>("unit", value)}
          >
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
          <Select
            name="categoryId"
            value={apiQuery.categoryId}
            onValueChange={(value) => handleSelect<string | null>("categoryId", value)}
          >
            <SelectTrigger>
              <SelectValue placeholder={lang.common.form.placeholder.category} />
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
          <Select
            name="supplier"
            value={apiQuery.supplier}
            onValueChange={(value) => handleSelect<string | null>("supplier", value)}
          >
            <SelectTrigger>
              <SelectValue placeholder={lang.common.form.placeholder.supplier} />
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
          <Select
            name="storageStatus"
            value={apiQuery.storageStatus}
            onValueChange={(value) => handleSelect<EStorageStatus | null>("storageStatus", value)}
          >
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
          <Select
            name="status"
            value={apiQuery.status}
            onValueChange={(value) => handleSelect<ERecordStatus | null>("status", value)}
          >
            <SelectTrigger>
              <SelectValue placeholder={lang.common.form.placeholder.status} />
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

export default ProductsFilter
