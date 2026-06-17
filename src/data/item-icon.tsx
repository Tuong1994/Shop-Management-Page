import { Banknote, DollarSign, Music, ShoppingCart, Store } from "lucide-react"

export enum EItemType {
  MARKET = "market",
  MANAGEMENT = "management",
  BANK = "bank",
  PRICING = "pricing",
  MUSIC = "music",
}

export const getItemIcon = (key: EItemType, iconSize = 45) => {
  const items = {
    [EItemType.MARKET]: <ShoppingCart size={iconSize} />,
    [EItemType.MANAGEMENT]: <Store size={iconSize} />,
    [EItemType.BANK]: <Banknote size={iconSize} />,
    [EItemType.PRICING]: <DollarSign size={iconSize} />,
    [EItemType.MUSIC]: <Music size={iconSize} />,
  }
  return items[key]
}
