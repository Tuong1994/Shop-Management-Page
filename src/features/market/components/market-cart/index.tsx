import type { FC } from "react"
import { useViewport } from "@/hooks"
import CartDesktop from "./cart-desktop"
import CartMobile from "./cart-mobile"

const MarketCart: FC = () => {
  const { isSmPhone, isPhone, isLgPhone, isSmTablet } = useViewport()

  const responsive = isSmPhone || isPhone || isLgPhone || isSmTablet

  return !responsive ? <CartDesktop /> : <CartMobile />
}

export default MarketCart
