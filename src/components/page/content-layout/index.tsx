import type { FC, ReactNode } from "react"
import { Package } from "lucide-react"
import { Title } from "@/components/ui/typography"
import { Button } from "@/components/ui/button"
import { EItemType, getItemIcon } from "@/data/item-icon"
import useLocale from "@/locale/useLocale"

interface ContentLayoutProps {
  children?: ReactNode
}

const ContentLayout: FC<ContentLayoutProps> = ({ children }) => {
  const { lang } = useLocale()

  return (
    <div className="pt-12.5">
      <div className="sticky top-12.5 bg-primary px-2.5 lg:px-16">
        <div className="flex items-center justify-between py-2.5">
          <div className="flex items-center gap-2 text-white">
            {getItemIcon(EItemType.MARKET, 20)}
            <Title level={4}>{lang.market.title}</Title>
          </div>
          <div className="flex">
            <Button className="text-back bg-white hover:bg-black hover:text-white cursor-pointer transition-colors">
              <Package />
              <span>Products</span>
            </Button>
          </div>
          <div>Cart</div>
        </div>
      </div>
      <div className="px-2.5 py-5 lg:px-16">{children}</div>
    </div>
  )
}

export default ContentLayout
