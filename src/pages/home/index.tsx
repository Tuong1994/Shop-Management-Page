import type { FC } from "react"
import { routerPaths } from "@/lib/router/paths"
import { EItemType, getItemIcon } from "@/data/item-icon"
import HomeOrderChart from "@/features/home/home-order-chart"
import HomeRenevueChart from "@/features/home/home-revenue"
import HomeCashFlowChart from "@/features/home/home-cash-flow-chart"
import HomeItem from "@/features/home/home-item"
import useLocale from "@/locale/use-locale"

const HomePage: FC = () => {
  const { lang } = useLocale()

  const items = [
    { icon: getItemIcon(EItemType.MARKET), name: lang.market.title, path: routerPaths.MARKET },
    { icon: getItemIcon(EItemType.MANAGEMENT), name: lang.management.title, path: routerPaths.MANAGEMENT },
    { icon: getItemIcon(EItemType.BANK), name: lang.bank.title, path: routerPaths.BANK },
    { icon: getItemIcon(EItemType.PRICING), name: lang.pricing.title, path: routerPaths.PRICING },
    { icon: getItemIcon(EItemType.MUSIC), name: lang.music.title, path: routerPaths.MUSIC },
  ]

  return (
    <div className="flex min-h-screen overflow-hidden md:h-screen lg:h-screen">
      <div className="flex w-full items-center justify-center overflow-auto md:w-1/3 lg:w-1/2 lg:overflow-hidden lg:pt-0 lg:pb-0">
        <div className="grid w-70 grid-cols-2 gap-5 p-0 pt-20 pb-10 md:grid-cols-1 md:px-10 md:pt-20 md:landscape:pt-120 md:pb-5 lg:w-100 lg:grid-cols-2 lg:landscape:pt-0">
          {items.map((item, idx) => (
            <HomeItem key={item.name + idx} icon={item.icon} name={item.name} path={item.path} />
          ))}
        </div>
      </div>
      <div className="hidden h-full overflow-auto p-10 pt-20 sm:w-2/3 md:block lg:block lg:w-1/2">
        <HomeCashFlowChart />
        <HomeOrderChart />
        <HomeRenevueChart />
      </div>
    </div>
  )
}

export default HomePage
