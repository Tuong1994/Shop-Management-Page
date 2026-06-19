import type { FC, ReactNode } from "react"
import type { TabItems } from "./type"
import { EPageType } from "@/data/page"
import ContentLayoutTabs from "./content-layout-tabs"
import ContentLayoutFilter from "./content-layout-filter"
import ContentLayoutTitle from "./content-layout-title"
import ContentLayoutActions from "./content-layout-actions"
import ContentLayoutMobile from "./content-layout-mobile"
import useViewport from "@/hooks/use-viewport"

interface ContentLayoutProps {
  pageType: EPageType
  children?: ReactNode
  tabItems?: TabItems
  filter?: ReactNode
  actions?: ReactNode
}

const ContentLayout: FC<ContentLayoutProps> = ({ children, tabItems = [], filter, actions, pageType }) => {
  const { isMobile, isTablet } = useViewport()

  const hasTabItems = tabItems.length > 0

  const isResponsive = isMobile || isTablet;

  const renderTabItems = () => {
    if (isResponsive) return null
    return hasTabItems && <ContentLayoutTabs tabItems={tabItems} />
  }

  const renderFilter = () => {
    if (isMobile) return null
    return filter && <ContentLayoutFilter filter={filter} />
  }

  return (
    <div className="pt-12.5">
      <div className="sticky top-12.5">
        <div className="flex items-center justify-between bg-primary px-2.5 py-2.5 lg:px-16">
          <ContentLayoutTitle pageType={pageType} />
          {renderTabItems()}
          <div className="flex items-center gap-3">
            {actions && <ContentLayoutActions actions={actions} />}
            {isResponsive && <ContentLayoutMobile tabItems={tabItems} filter={filter} />}
          </div>
        </div>
        {renderFilter()}
      </div>
      <div className="px-2.5 py-5 lg:px-16">{children}</div>
    </div>
  )
}

export default ContentLayout
