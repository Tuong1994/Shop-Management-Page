import type { FC } from "react"
import HomeOrderChart from "@/features/home/home-order-chart"
import HomeRenevueChart from "@/features/home/home-revenue"
import HomeCashFlowChart from "@/features/home/home-cash-flow-chart"

const HomePage: FC = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <div className="w-1/2"></div>
      <div className="w-1/2 h-full pt-20 p-10 overflow-auto">
        <HomeCashFlowChart className="mb-5" />
        <HomeOrderChart />
        <HomeRenevueChart />
      </div>
    </div>
  )
}

export default HomePage
