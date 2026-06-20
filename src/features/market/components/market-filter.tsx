import type { FC } from "react"
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
import { useViewport } from "@/hooks"
import useLocale from "@/locale/use-locale"

const MarketFilter: FC = () => {
  const { lang } = useLocale()

  const { isPhone } = useViewport()

  return (
    <>
      {isPhone && <div className="mb-2.5 text-muted-foreground">{lang.market.filter}</div>}
      <FieldGroup className="grid grid-cols-1 gap-2 sm:grid-cols-3 md:grid-cols-3 lg:w-150 lg:grid-cols-3">
        <Field className="w-full">
          <InputGroup>
            <InputGroupInput placeholder={`${lang.common.form.placeholder.search}...`} />
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
      </FieldGroup>
    </>
  )
}

export default MarketFilter
