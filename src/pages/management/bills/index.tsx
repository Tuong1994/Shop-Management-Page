import type { FC } from "react"
import { useViewport } from "@/hooks"
import BillsDesktop from "@/features/management/components/bills-desktop"
import BillsMobile from "@/features/management/components/bills-mobile"

const BillsPage: FC = () => {
  const { isPhone, isTablet } = useViewport()

  const isResponsive = isPhone || isTablet

  return isResponsive ? <BillsMobile /> : <BillsDesktop />
}

export default BillsPage
