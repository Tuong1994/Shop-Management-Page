import type { FC } from "react"
import Logo from "./logo"
import Profile from "./profile"

const Header: FC = () => {
  return (
    <div className="w-full h-12.5 fixed top-0 z-50 bg-primary-foreground flex items-center justify-between border-b px-2.5 lg:px-16">
      <Logo />
      <Profile />
    </div>
  )
}

export default Header
