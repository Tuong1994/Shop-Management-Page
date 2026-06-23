import type { Locale } from "@/locale/type"
import { Badge } from "@/components/ui/badge"
import { EProductDisplay, EProductUnit, EStorageStatus } from "@/models/product/product.enum"

export const renderProductDisplay = (display: EProductDisplay, lang: Locale) => {
  const displays: Record<EProductDisplay, string> = {
    [EProductDisplay.SHELF]: lang.product.display.shelf,
    [EProductDisplay.FRIDGE]: lang.product.display.fridge,
    [EProductDisplay.FREEZER]: lang.product.display.freezer,
  }
  return <Badge className="bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300">{displays[display]}</Badge>
}

export const renderProductUnit = (unit: EProductUnit, lang: Locale) => {
  const units: Record<EProductUnit, string> = {
    [EProductUnit.KG]: lang.product.unit.kg,
    [EProductUnit.BOX]: lang.product.unit.box,
    [EProductUnit.BOTTLE]: lang.product.unit.bottle,
    [EProductUnit.PACK]: lang.product.unit.pack,
    [EProductUnit.KEG]: lang.product.unit.keg,
    [EProductUnit.PIECE]: lang.product.unit.piece,
    [EProductUnit.CAN]: lang.product.unit.can,
    [EProductUnit.BAG]: lang.product.unit.bag,
    [EProductUnit.BAR]: lang.product.unit.bar,
    [EProductUnit.JAR]: lang.product.unit.jar,
    [EProductUnit.TUB]: lang.product.unit.tub,
    [EProductUnit.SHAKER]: lang.product.unit.shaker,
    [EProductUnit.LOAF]: lang.product.unit.loaf,
    [EProductUnit.TUBE]: lang.product.unit.tube,
  }
  return <Badge className="bg-purple-50 text-purple-700 dark:bg-purple-950 dark:text-purple-300">{units[unit]}</Badge>
}

export const renderStorageStatus = (storage: EStorageStatus, lang: Locale) => {
  const storages: Record<EStorageStatus, string> = {
    [EStorageStatus.IN_STOCK]: lang.product.storage.inStock,
    [EStorageStatus.OUT_OF_STOCK]: lang.product.storage.outOfStock,
  }
  const color = storage === EStorageStatus.IN_STOCK ? "green" : "red"
  return <Badge className={`bg-${color}-50 text-${color}-700 dark:bg-${color}-950 dark:text-${color}-300`}>{storages[storage]}</Badge>
}
