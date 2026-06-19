import type { FC, ReactNode } from "react"
import { Button } from "@/components/ui/button"
import { Drawer, DrawerContent, DrawerDescription, DrawerTrigger } from "@/components/ui/drawer"
import { PanelRight } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import type { TabItems } from "./type"
import LocaleLink from "@/locale/locale-link"
import useViewport from "@/hooks/use-viewport"

interface ContentLayoutMobileProps {
  filter: ReactNode
  tabItems: TabItems
}

const ContentLayoutMobile: FC<ContentLayoutMobileProps> = ({ tabItems, filter }) => {
  const { isPhone } = useViewport()

  return (
    <Drawer direction="right">
      <DrawerTrigger className="cursor-pointer text-white">
        <PanelRight size={25} />
      </DrawerTrigger>
      <DrawerContent>
        <div className="no-scrollbar overflow-y-auto p-1.5">
          <DrawerDescription className="mb-2.5">Menu</DrawerDescription>
          {tabItems.map((tab) => (
            <LocaleLink key={tab.id} to={tab.path} className="block">
              <Button className="mb-2 w-full justify-start">
                {tab.icon}
                <span className="flex-1">{tab.name}</span>
              </Button>
            </LocaleLink>
          ))}
          <Separator />
          {isPhone && (
            <div className="mt-5">
              <DrawerDescription className="mb-2.5">Filter</DrawerDescription>
              {filter}
            </div>
          )}
        </div>
      </DrawerContent>
    </Drawer>
  )
}

export default ContentLayoutMobile
