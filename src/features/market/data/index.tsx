import type { TabItems } from "@/components/page/content-layout/type"
import type { Locale } from "@/locale/type"
import { routerPaths } from "@/lib/router/paths"
import { Brush, Layers, Package, ShelvingUnit, Van, Wrench } from "lucide-react"
import { getRouteWithSub } from "@/lib/router/helper"

export const getTabItems = (lang: Locale): TabItems => {
  const baseUrl = routerPaths.MARKET
  return [
    {
      id: routerPaths.PRODUCTS,
      name: lang.market.tabItems.products,
      icon: <Package />,
      path: getRouteWithSub(baseUrl, routerPaths.PRODUCTS),
    },
    {
      id: routerPaths.FURNITURES,
      name: lang.market.tabItems.furnitures,
      icon: <ShelvingUnit />,
      path: getRouteWithSub(baseUrl, routerPaths.FURNITURES),
    },
    {
      id: routerPaths.PAINTS,
      name: lang.market.tabItems.paints,
      icon: <Brush />,
      path: getRouteWithSub(baseUrl, routerPaths.PAINTS),
    },
    {
      id: routerPaths.FLOOR,
      name: lang.market.tabItems.floor,
      icon: <Layers />,
      path: getRouteWithSub(baseUrl, routerPaths.FLOOR),
    },
    {
      id: routerPaths.TOOLS,
      name: lang.market.tabItems.tools,
      icon: <Wrench />,
      path: getRouteWithSub(baseUrl, routerPaths.TOOLS),
    },
    {
      id: routerPaths.VEHICLES,
      name: lang.market.tabItems.vehicles,
      icon: <Van />,
      path: getRouteWithSub(baseUrl, routerPaths.VEHICLES),
    },
  ]
}
