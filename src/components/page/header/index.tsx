import type { FC } from "react"
import Profile from "./profile"
import Revenue from "./revenue"
import Logo from "../logo"

const Header: FC = () => {
  return (
    <div className="w-full h-12.5 fixed top-0 z-50 bg-background flex items-center justify-between border-b px-2.5 lg:px-16">
      <Logo />
      <div className="flex items-center gap-4">
        <Revenue />
        <Profile />
      </div>
    </div>
  )
}

export default Header
