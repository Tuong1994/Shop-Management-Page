import type { FC } from "react"
import { routerPaths } from "@/lib/router/paths"
import Image, { type ImageProps } from "../image"
import useLocale from "@/locale/use-locale"

interface LogoProps extends ImageProps {}

const Logo: FC<LogoProps> = ({ imgWidth = 70, imgHeight = 60, ...restProps }) => {
  const { locale, navigateWithLocale } = useLocale()

  const handleNavigate = () => navigateWithLocale(locale, routerPaths.HOME)

  return (
    <div className="cursor-pointer" onClick={handleNavigate}>
      <Image imgWidth={imgWidth} imgHeight={imgHeight} src="/logo.svg" {...restProps} />
      {/* <div className="text-xl font-bold text-primary">Shop</div>
      <div className="text-[10px]">Management</div> */}
    </div>
  )
}

export default Logo
