import type { FC } from "react"
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
import { Link } from "react-router"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Globe, LogOutIcon, PanelLeft } from "lucide-react"
import { useTheme, type Theme } from "@/components/theme-provider"
import { ELocale } from "@/locale/constant"
import useLocale from "@/locale/useLocale"

const Profile: FC = () => {
  const { lang, locale, setLang } = useLocale()

  const { theme, setTheme } = useTheme()

  const currentLocale: ELocale = locale || ELocale.EN;

  const handleSwitchTheme = (theme: Theme) => setTheme(theme)

  const handleSwitchLocale = (locale: ELocale) => setLang(locale)

  const changeLocale = (newLocale: ELocale) => {
    // Thay locale trong URL hiện tại
    const pathWithoutLocale = window.location.pathname.replace(`/${currentLocale}`, "") || "/";
    return `/${newLocale}${pathWithoutLocale}`;
  };

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
                  <Link to={changeLocale(ELocale.EN)}>{lang.header.profile.locale.en}</Link>
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value={ELocale.VN}>
                  <Link to={changeLocale(ELocale.VN)}>{lang.header.profile.locale.vn}</Link>
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
