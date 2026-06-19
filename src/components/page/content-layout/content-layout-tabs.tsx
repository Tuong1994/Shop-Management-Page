import type { FC } from "react"
import type { TabItems } from "./type"
import { Button } from "@/components/ui/button"
import LocaleLink from "@/locale/locale-link"

interface ContentLayoutTabsProps {
  tabItems: TabItems
}

const ContentLayoutTabs: FC<ContentLayoutTabsProps> = ({ tabItems }) => {
  return (
    <div className="flex items-center justify-center gap-2">
      {tabItems.map((tab) => (
        <LocaleLink key={tab.id} to={tab.path} className="block">
          <Button className="min-w-25 text-black cursor-pointer bg-white transition-colors hover:bg-black hover:text-white">
            {tab.icon}
            <span>{tab.name}</span>
          </Button>
        </LocaleLink>
      ))}
    </div>
  )
}

export default ContentLayoutTabs
