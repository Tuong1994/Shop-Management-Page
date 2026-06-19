import type { TabItems } from "@/components/page/content-layout/type"
import type { Locale } from "@/locale/type"
import { Brush, Layers, Package, ShelvingUnit, Van, Wrench } from "lucide-react"

export const getTabItems = (lang: Locale): TabItems => {
  return [
    { id: "product", name: lang.market.tabItems.products, icon: <Package />, path: "#" },
    { id: "furnitures", name: lang.market.tabItems.furnitures, icon: <ShelvingUnit />, path: "#" },
    { id: "paints", name: lang.market.tabItems.paints, icon: <Brush />, path: "#" },
    { id: "floor", name: lang.market.tabItems.floor, icon: <Layers />, path: "#" },
    { id: "tools", name: lang.market.tabItems.tools, icon: <Wrench />, path: "#" },
    { id: "vehicles", name: lang.market.tabItems.vehicles, icon: <Van />, path: "#" },
  ]
}
