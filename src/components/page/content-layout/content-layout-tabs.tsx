import type { FC } from "react"
import type { TabItems } from "./type"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { getRouteSubname } from "@/lib/router/helper"
import { useLocation } from "react-router"
import LocaleLink from "@/locale/locale-link"

interface ContentLayoutTabsProps {
  tabItems: TabItems
}

const ContentLayoutTabs: FC<ContentLayoutTabsProps> = ({ tabItems }) => {
  const location = useLocation()

  const pathname = getRouteSubname(location)

  return (
    <div className="flex items-center justify-center gap-2">
      {tabItems.map((tab) => {
        const isActive = pathname === tab.id
        const activeClassName = isActive && "bg-black text-white"
        return (
          <LocaleLink key={tab.id} to={tab.path} className="block">
            <Button className={cn("min-w-25 cursor-pointer bg-white text-black transition-colors hover:bg-black hover:text-white", activeClassName)}>
              {tab.icon}
              <span>{tab.name}</span>
            </Button>
          </LocaleLink>
        )
      })}
    </div>
  )
}

export default ContentLayoutTabs
