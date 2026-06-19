import type { FC } from "react"
import CartDesktop from "./cart-desktop"
import CartMobile from "./cart-mobile"
import useViewport from "@/hooks/use-viewport"

const MarketProductCart: FC = () => {
  const { isSmPhone, isPhone, isLgPhone, isSmTablet } = useViewport()

  const responsive = isSmPhone || isPhone || isLgPhone || isSmTablet

  return !responsive ? <CartDesktop /> : <CartMobile />
}

export default MarketProductCart
