import type { FC } from "react"
import { Globe } from "lucide-react"
import { ELocale } from "@/locale/enum"
import {
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
} from "@/components/ui/dropdown-menu"
import useLocale from "@/locale/use-locale"

const LocaleDropdown: FC = () => {
  const { lang, locale, setLang, navigateWithLocale } = useLocale()

  const handleSwitchLocale = (locale: ELocale) => {
    setLang(locale)
    navigateWithLocale(locale)
  }

  return (
    <DropdownMenuSub>
      <DropdownMenuSubTrigger>
        <Globe />
        {lang.header.profile.locale.title}
      </DropdownMenuSubTrigger>
      <DropdownMenuPortal>
        <DropdownMenuSubContent>
          <DropdownMenuRadioGroup value={locale} onValueChange={handleSwitchLocale}>
            <DropdownMenuRadioItem value={ELocale.EN}>{lang.header.profile.locale.en}</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value={ELocale.VN}>{lang.header.profile.locale.vn}</DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuSubContent>
      </DropdownMenuPortal>
    </DropdownMenuSub>
  )
}

export default LocaleDropdown
