import type { FC } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import BillsCard from "./bills-card"
import useLocale from "@/locale/use-locale"

const BillsMobile: FC = () => {
  const { lang } = useLocale()

  return (
    <Tabs defaultValue="bills">
      <TabsList className="w-full">
        <TabsTrigger value="bills">{lang.management.bills.title}</TabsTrigger>
        <TabsTrigger value="rents">{lang.management.bills.rents}</TabsTrigger>
      </TabsList>
      <TabsContent value="bills">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {[...Array(2)].map((_, idx) => (
            <BillsCard key={idx} billType="bill" className="not-last:mb-2.5" />
          ))}
        </div>
      </TabsContent>
      <TabsContent value="rents">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {[...Array(5)].map((_, idx) => (
            <BillsCard key={idx} billType="rent" className="not-last:mb-2.5" />
          ))}
        </div>
      </TabsContent>
    </Tabs>
  )
}

export default BillsMobile
