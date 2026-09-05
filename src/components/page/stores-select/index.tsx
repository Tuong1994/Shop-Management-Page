import type { FC } from "react"
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

interface StoresSelectProps {}

const StoresSelect: FC<StoresSelectProps> = () => {
  const { lang } = useLocale()

  return (
    <Select>
      <SelectTrigger className="mb-5 w-full">
        <SelectValue placeholder={lang.common.form.placeholder.select} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>{lang.general.stores}</SelectLabel>
          <SelectItem value="#0001">Shop Tran khanh Du</SelectItem>
          <SelectItem value="#0002">Shop Au Co</SelectItem>
          <SelectItem value="#0003">Shop Le Dai Thanh</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

export default StoresSelect
