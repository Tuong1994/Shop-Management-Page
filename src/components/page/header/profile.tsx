import { type FC } from "react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Component, LogOutIcon } from "lucide-react"
import { routerPaths } from "@/lib/router/paths"
import LocaleDropdown from "../locale-dropdown"
import ThemeDropdown from "../theme-dropdown"
import LocaleLink from "@/locale/locale-link"
import useLocale from "@/locale/use-locale"

const Profile: FC = () => {
  const { lang } = useLocale()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarFallback>T</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          <Component />
          <LocaleLink to={routerPaths.GENERAL}>{lang.general.title}</LocaleLink>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <LocaleDropdown />
        <ThemeDropdown />
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
