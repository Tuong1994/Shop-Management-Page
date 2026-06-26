import type { FC } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import StaffsList from "@/features/management/components/staffs/staffs-list"
import HiringList from "@/features/management/components/staffs/hiring-list"

const StaffsPage: FC = () => {
  const tabs = [
    { id: "staffs", title: "Staffs", content: <StaffsList /> },
    { id: "hiring", title: "Hiring", content: <HiringList /> },
  ]

  return (
    <Tabs defaultValue="staffs">
      <TabsList>
        {tabs.map((tab) => (
          <TabsTrigger key={tab.id} value={tab.id}>
            {tab.title}
          </TabsTrigger>
        ))}
      </TabsList>
      {tabs.map((tab) => (
        <TabsContent key={tab.id} value={tab.id}>
          {tab.content}
        </TabsContent>
      ))}
    </Tabs>
  )
}

export default StaffsPage
