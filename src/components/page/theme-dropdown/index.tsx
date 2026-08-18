import type { FC } from "react"
import {
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
} from "@/components/ui/dropdown-menu"
import { PanelLeft } from "lucide-react"
import { useTheme, type Theme } from "@/components/theme-provider"
import useLocale from "@/locale/use-locale"

const ThemeDropdown: FC = () => {
  const { lang } = useLocale()

  const { theme, setTheme } = useTheme()

  const handleSwitchTheme = (theme: Theme) => setTheme(theme)

  return (
    <DropdownMenuSub>
      <DropdownMenuSubTrigger>
        <PanelLeft />
        {lang.header.profile.theme.title}
      </DropdownMenuSubTrigger>
      <DropdownMenuPortal>
        <DropdownMenuSubContent>
          <DropdownMenuRadioGroup value={theme} onValueChange={handleSwitchTheme}>
            <DropdownMenuRadioItem value="light">{lang.header.profile.theme.light}</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="dark">{lang.header.profile.theme.dark}</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="system">{lang.header.profile.theme.system}</DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuSubContent>
      </DropdownMenuPortal>
    </DropdownMenuSub>
  )
}

export default ThemeDropdown
