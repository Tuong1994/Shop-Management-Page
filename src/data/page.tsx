import type { Locale } from "@/locale/type"
import { Banknote, DollarSign, Music, ShoppingCart, Store } from "lucide-react"

export enum EPageType {
  MARKET = "market",
  MANAGEMENT = "management",
  BANK = "bank",
  PRICING = "pricing",
  MUSIC = "music",
}

export const getPageIcon = (key: EPageType, iconSize = 45) => {
  const icons = {
    [EPageType.MARKET]: <ShoppingCart size={iconSize} />,
    [EPageType.MANAGEMENT]: <Store size={iconSize} />,
    [EPageType.BANK]: <Banknote size={iconSize} />,
    [EPageType.PRICING]: <DollarSign size={iconSize} />,
    [EPageType.MUSIC]: <Music size={iconSize} />,
  }
  return icons[key]
}

export const getPageTitle = (key: EPageType, lang: Locale) => {
  const titles = {
    [EPageType.MARKET]: lang.market.title,
    [EPageType.MANAGEMENT]: lang.management.title,
    [EPageType.BANK]: lang.bank.title,
    [EPageType.PRICING]: lang.pricing.title,
    [EPageType.MUSIC]: lang.music.title,
  }
  return titles[key]
}