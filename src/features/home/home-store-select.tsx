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
import { Title } from "@/components/ui/typography"
import useLocale from "@/locale/use-locale"

interface HomeStoreSelectProps {}

const HomeStoreSelect: FC<HomeStoreSelectProps> = () => {
  const { lang } = useLocale()

  return (
    <>
      <Title level={4} className="mb-2">Branch</Title>
      <Select>
        <SelectTrigger className="w-full">
          <SelectValue placeholder={lang.common.form.placeholder.select} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Stores</SelectLabel>
            <SelectItem value="#0001">Shop Tran khanh Du</SelectItem>
            <SelectItem value="#0002">Shop Au Co</SelectItem>
            <SelectItem value="#0003">Shop Le Dai Thanh</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </>
  )
}

export default HomeStoreSelect
