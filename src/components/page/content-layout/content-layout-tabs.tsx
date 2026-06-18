import type { FC } from "react"
import type { TabItems } from "./type"
import { Button } from "@/components/ui/button"

interface ContentLayoutTabsProps {
  tabItems: TabItems
}

const ContentLayoutTabs: FC<ContentLayoutTabsProps> = ({ tabItems }) => {
  return (
    <div className="hidden lg:flex items-center gap-2">
      {tabItems.map((tab) => (
        <Button
          key={tab.id}
          className="text-back cursor-pointer bg-white transition-colors hover:bg-black hover:text-white"
        >
          {tab.icon}
          <span>{tab.name}</span>
        </Button>
      ))}
    </div>
  )
}

export default ContentLayoutTabs
