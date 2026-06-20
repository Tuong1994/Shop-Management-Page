import type { FC } from "react"
import { EPageType } from "@/data/page"
import { routerPaths } from "@/lib/router/paths"
import { getTabItems } from "@/features/market/data"
import { getRouteSubname } from "@/lib/router/helper"
import { Outlet, useLocation } from "react-router"
import ContentLayout from "@/components/page/content-layout"
import MarketFilter from "@/features/market/components/market-filter"
import MarketCart from "@/features/market/components/market-cart"
import useLocale from "@/locale/use-locale"

const MarketPage: FC = () => {
  const { lang } = useLocale()

  const location = useLocation()

  const pathname = getRouteSubname(location)

  const hasFilter = pathname === routerPaths.PRODUCTS || pathname === routerPaths.FURNITURES

  return (
    <ContentLayout
      pageType={EPageType.MARKET}
      tabItems={getTabItems(lang)}
      actions={<MarketCart />}
      bottomContent={hasFilter && <MarketFilter />}
    >
      <Outlet />
    </ContentLayout>
  )
}

export default MarketPage
