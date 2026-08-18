import { type FC } from "react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { LogOutIcon } from "lucide-react"
import LocaleDropdown from "../locale-dropdown"
import ThemeDropdown from "../theme-dropdown"
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
