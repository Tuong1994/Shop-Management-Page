import { useState, type FC } from "react"
import type { ApiQuery } from "@/lib/axios/type"
import type { ProductDataTable } from "@/models/product/product.type"
import type { Table } from "@tanstack/react-table"
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

interface ProductFilterFormProps {
  table: Table<ProductDataTable>
  onCancel?: () => void
}

const ProductFilterForm: FC<ProductFilterFormProps> = ({ onCancel }) => {
  const initialQuery: ApiQuery = {
    keywords: "",
    categoryId: "",
    supplier: "",
    display: undefined,
    unit: undefined,
    status: undefined,
    storageStatus: undefined,
  }

  const { lang } = useLocale()

  const [apiQuery, setApiQuery] = useState<ApiQuery>(initialQuery)

  const handleCancel = () => {
    onCancel?.()
  }

  return (
    <form className="w-full">
      <FieldGroup className="grid grid-cols-1 gap-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-8">
        <Field className="w-full">
          <InputGroup>
            <InputGroupInput placeholder={`${lang.common.form.placeholder.search}...`} value={apiQuery.keywords} />
            <InputGroupAddon align="inline-end">
              <Search />
            </InputGroupAddon>
          </InputGroup>
        </Field>

        <Field>
          <Select>
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
          <Select>
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
          <Select>
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
          <Select>
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
          <Select>
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
          <Select>
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

export default ProductFilterForm
