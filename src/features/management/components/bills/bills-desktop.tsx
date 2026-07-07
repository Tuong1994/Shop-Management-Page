import type { FC } from "react"
import { Card, CardContent } from "@/components/ui/card"
import BillsCard from "@/features/management/components/bills/bills-card"
import useLocale from "@/locale/use-locale"

const BillsDesktop: FC = () => {
  const { lang } = useLocale()

  const titleClassName = "bg-primary text-center text-xl text-white font-bold rounded-[20px] p-2 mb-5"

  return (
    <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-2">
      <Card>
        <CardContent>
          <div className={titleClassName}>{lang.management.bills.title}</div>
          <div className="grid gap-3 lg:grid-cols-1 xl:grid-cols-2">
            {[...Array(2)].map((_, idx) => (
              <BillsCard key={idx} billType="bill" />
            ))}
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <div className={titleClassName}>{lang.management.bills.rents}</div>
          <div className="grid gap-3 lg:grid-cols-1 xl:grid-cols-2">
            {[...Array(5)].map((_, idx) => (
              <BillsCard key={idx} billType="rent" />
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default BillsDesktop
