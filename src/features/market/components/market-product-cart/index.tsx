import type { FC } from "react"
import CartDesktop from "./cart-desktop"
import CartMobile from "./cart-mobile"
import useViewport from "@/hooks/use-viewport"

const MarketProductCart: FC = () => {
  const { isMobile } = useViewport()

  return !isMobile ? <CartDesktop /> : <CartMobile />
}

export default MarketProductCart
