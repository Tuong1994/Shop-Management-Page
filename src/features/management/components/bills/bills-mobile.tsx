import type { FC } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import BillsCard from "./bills-card"

const BillsMobile: FC = () => {
  return (
    <Tabs defaultValue="bills">
      <TabsList className="w-full">
        <TabsTrigger value="bills">Bills</TabsTrigger>
        <TabsTrigger value="rents">Rents</TabsTrigger>
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
