import { type FC } from "react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Globe, LogOutIcon, PanelLeft } from "lucide-react"
import { useTheme, type Theme } from "@/components/theme-provider"
import { ELocale } from "@/locale/enum"
import useLocale from "@/locale/use-locale"

const Profile: FC = () => {
  const { lang, locale, setLang, navigateWithLocale } = useLocale()

  const { theme, setTheme } = useTheme()

  const handleSwitchTheme = (theme: Theme) => setTheme(theme)

  const handleSwitchLocale = (locale: ELocale) => {
    setLang(locale)
    navigateWithLocale(locale)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarFallback>T</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            <Globe />
            {lang.header.profile.locale.title}
          </DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent>
              <DropdownMenuRadioGroup value={locale} onValueChange={handleSwitchLocale}>
                <DropdownMenuRadioItem value={ELocale.EN}>
                  {lang.header.profile.locale.en}
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value={ELocale.VN}>
                  {lang.header.profile.locale.vn}
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>

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
                <DropdownMenuRadioItem value="system">
                  {lang.header.profile.theme.system}
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>

        <DropdownMenuSeparator />

        <DropdownMenuItem>
          <LogOutIcon />
          {lang.header.profile.logout}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default Profile
