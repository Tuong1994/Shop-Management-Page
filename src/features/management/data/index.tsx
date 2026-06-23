import type { TabItems } from "@/components/page/content-layout/type"
import type { Locale } from "@/locale/type"
import { getRouteWithSub } from "@/lib/router/helper"
import { routerPaths } from "@/lib/router/paths"
import { HousePlus, Receipt, Users, Warehouse } from "lucide-react"

export const getManagementTabItems = (lang: Locale): TabItems => {
  const baseUrl = routerPaths.MANAGEMENT.INDEX

  return [
    {
      id: routerPaths.MANAGEMENT.BILLS,
      name: lang.management.tabItems.bills,
      icon: <Receipt />,
      path: getRouteWithSub(baseUrl, routerPaths.MANAGEMENT.BILLS),
    },
    {
      id: routerPaths.MANAGEMENT.GROWTH,
      name: lang.management.tabItems.growth,
      icon: <HousePlus />,
      path: getRouteWithSub(baseUrl, routerPaths.MANAGEMENT.GROWTH),
    },
    {
      id: routerPaths.MANAGEMENT.STORAGE,
      name: lang.management.tabItems.storage,
      icon: <Warehouse />,
      path: getRouteWithSub(baseUrl, routerPaths.MANAGEMENT.STORAGE),
    },
    {
      id: routerPaths.MANAGEMENT.HIRING,
      name: lang.management.tabItems.hiring,
      icon: <Users />,
      path: getRouteWithSub(baseUrl, routerPaths.MANAGEMENT.HIRING),
    },
  ]
}

