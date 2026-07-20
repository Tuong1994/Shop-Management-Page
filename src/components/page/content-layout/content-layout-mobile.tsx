import type { FC, ReactNode } from "react"
import type { TabItems } from "./type"
import { Button } from "@/components/ui/button"
import { Drawer, DrawerContent, DrawerDescription, DrawerTrigger } from "@/components/ui/drawer"
import { PanelRight } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { useViewport } from "@/hooks"
import LocaleLink from "@/locale/locale-link"
import useLocale from "@/locale/use-locale"

interface ContentLayoutMobileProps {
  bottomContent: ReactNode
  tabItems: TabItems
}

const ContentLayoutMobile: FC<ContentLayoutMobileProps> = ({ tabItems, bottomContent }) => {
  const { isPhone } = useViewport()

  const { lang } = useLocale()

  return (
    <Drawer swipeDirection="right">
      <DrawerTrigger className="cursor-pointer text-white">
        <PanelRight size={25} />
      </DrawerTrigger>
      <DrawerContent>
        <div className="no-scrollbar overflow-y-auto p-1.5">
          <DrawerDescription className="mb-2.5">{lang.market.menu}</DrawerDescription>
          {tabItems.map((tab) => (
            <LocaleLink key={tab.id} to={tab.path} className="block">
              <Button className="mb-2 w-full justify-start">
                {tab.icon}
                <span className="flex-1">{tab.name}</span>
              </Button>
            </LocaleLink>
          ))}
          {isPhone && bottomContent && (
            <>
              <Separator />
              <div className="mt-5">{bottomContent}</div>
            </>
          )}
        </div>
      </DrawerContent>
    </Drawer>
  )
}

export default ContentLayoutMobile
