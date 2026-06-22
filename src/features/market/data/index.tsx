import type { TabItems } from "@/components/page/content-layout/type"
import type { Locale } from "@/locale/type"
import { routerPaths } from "@/lib/router/paths"
import { Brush, Layers, Package, ShelvingUnit, Van, Wrench } from "lucide-react"
import { getRouteWithSub } from "@/lib/router/helper"

export const getMarketTabItems = (lang: Locale): TabItems => {
  const baseUrl = routerPaths.MARKET.INDEX
  return [
    {
      id: routerPaths.MARKET.PRODUCTS,
      name: lang.market.tabItems.products,
      icon: <Package />,
      path: getRouteWithSub(baseUrl, routerPaths.MARKET.PRODUCTS),
    },
    {
      id: routerPaths.MARKET.FURNITURES,
      name: lang.market.tabItems.furnitures,
      icon: <ShelvingUnit />,
      path: getRouteWithSub(baseUrl, routerPaths.MARKET.FURNITURES),
    },
    {
      id: routerPaths.MARKET.PAINTS,
      name: lang.market.tabItems.paints,
      icon: <Brush />,
      path: getRouteWithSub(baseUrl, routerPaths.MARKET.PAINTS),
    },
    {
      id: routerPaths.MARKET.FLOOR,
      name: lang.market.tabItems.floor,
      icon: <Layers />,
      path: getRouteWithSub(baseUrl, routerPaths.MARKET.FLOOR),
    },
    {
      id: routerPaths.MARKET.TOOLS,
      name: lang.market.tabItems.tools,
      icon: <Wrench />,
      path: getRouteWithSub(baseUrl, routerPaths.MARKET.TOOLS),
    },
    {
      id: routerPaths.MARKET.VEHICLES,
      name: lang.market.tabItems.vehicles,
      icon: <Van />,
      path: getRouteWithSub(baseUrl, routerPaths.MARKET.VEHICLES),
    },
  ]
}
