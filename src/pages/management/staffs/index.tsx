import type { FC } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import StaffsList from "@/features/management/components/staffs/staffs-list"
import HiringList from "@/features/management/components/staffs/hiring-list"
import useLocale from "@/locale/use-locale"

const StaffsPage: FC = () => {
  const {lang} = useLocale()

  const tabs = [
    { id: "staffs", title: lang.management.tabItems.staffs, content: <StaffsList /> },
    { id: "hiring", title: lang.management.tabItems.hiring, content: <HiringList /> },
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
