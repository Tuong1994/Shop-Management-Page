import type { FC } from "react"
import { routerPaths } from "@/lib/router/paths"
import useLocale from "@/locale/use-locale"

const Logo: FC = () => {
  const { locale, navigateWithLocale } = useLocale()

  const handleNavigate = () => navigateWithLocale(locale, routerPaths.HOME)

  return (
    <div className="cursor-pointer" onClick={handleNavigate}>
      <div className="text-xl font-bold text-primary">Shop</div>
      <div className="text-[10px] text-black">Management</div>
    </div>
  )
}

export default Logo
