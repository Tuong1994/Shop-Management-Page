import type { FC } from "react"
import Logo from "./logo"
import Profile from "./profile"

const Header: FC = () => {
  return (
    <div className="w-full fixed z-50 bg-background flex items-center justify-between border-b p-1 px-2.5 lg:px-16">
      <Logo />
      <Profile />
    </div>
  )
}

export default Header
