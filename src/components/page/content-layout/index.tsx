import type { FC, ReactNode } from "react"
import { Title } from "@/components/ui/typography"
import { EItemType, getItemIcon } from "@/data/item-icon"
import useLocale from "@/locale/useLocale"
import type { TabItems } from "./type"
import ContentLayoutTabs from "./content-layout-tabs"

interface ContentLayoutProps {
  children?: ReactNode
  tabItems?: TabItems;
  filter?: ReactNode;
}

const ContentLayout: FC<ContentLayoutProps> = ({ children, tabItems = [], filter }) => {
  const { lang } = useLocale()

  return (
    <div className="pt-12.5">
      <div className="sticky top-12.5">
        <div className="flex items-center justify-between bg-primary px-2.5 py-2.5 lg:px-16">
          <div className="flex items-center gap-2 text-white">
            {getItemIcon(EItemType.MARKET, 20)}
            <Title level={4}>{lang.market.title}</Title>
          </div>
          <ContentLayoutTabs tabItems={tabItems} />
          <div>Cart</div>
        </div>
        {filter &&  <div className="bg-primary-foreground px-2.5 py-2.5 lg:px-16">
          {filter}
        </div>}
      </div>
      <div className="px-2.5 py-5 lg:px-16">{children}</div>
    </div>
  )
}

export default ContentLayout
