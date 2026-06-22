import type { FC } from "react"
import { Card, CardContent } from "@/components/ui/card"
import BillsCard from "@/features/management/components/bills-card"

const BillsDesktop: FC = () => {
  const titleClassName = "bg-primary text-center text-xl text-white font-bold rounded-[20px] p-2 mb-5"

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
      <Card>
        <CardContent>
          <div className={titleClassName}>Bills</div>
          <div className="grid lg:grid-cols-1 xl:grid-cols-2 gap-3">
            {[...Array(2)].map((_, idx) => (
              <BillsCard key={idx} billType="bill" />
            ))}
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <div className={titleClassName}>Rents</div>
          <div className="grid lg:grid-cols-1 xl:grid-cols-2 gap-3">
            {[...Array(5)].map((_, idx) => (
              <BillsCard key={idx} billType="rent" />
            ))}
          </div>
        </CardContent>
      </Card>
    </ div>
  )
}

export default BillsDesktop
