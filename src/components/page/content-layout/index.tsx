import type { FC, ReactNode } from "react"
import type { TabItems } from "./type"
import { EPageType } from "@/data/page"
import ContentLayoutTabs from "./content-layout-tabs"
import ContentLayoutFilter from "./content-layout-filter"
import ContentLayoutTitle from "./content-layout-title"
import { Avatar, AvatarBadge, AvatarFallback } from "@/components/ui/avatar"
import { ShoppingCart } from "lucide-react"

interface ContentLayoutProps {
  pageType: EPageType
  children?: ReactNode
  tabItems?: TabItems
  filter?: ReactNode
}

const ContentLayout: FC<ContentLayoutProps> = ({ children, tabItems = [], filter, pageType }) => {
  return (
    <div className="pt-12.5">
      <div className="sticky top-12.5">
        <div className="flex items-center justify-between bg-primary px-2.5 py-2.5 lg:px-16">
          <ContentLayoutTitle pageType={pageType} />
          <ContentLayoutTabs tabItems={tabItems} />
          <Avatar>
            <AvatarFallback>
              <ShoppingCart />
            </AvatarFallback>
            <AvatarBadge className="bg-green-600 dark:bg-green-800">10</AvatarBadge>
          </Avatar>
        </div>
        {filter && <ContentLayoutFilter filter={filter} />}
      </div>
      <div className="px-2.5 py-5 lg:px-16">{children}</div>
    </div>
  )
}

export default ContentLayout
