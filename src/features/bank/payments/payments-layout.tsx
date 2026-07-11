import { useState, type FC } from "react"
import { Paragraph } from "@/components/ui/typography"
import { Button } from "@/components/ui/button"
import { PanelLeft } from "lucide-react"
import { useViewport } from "@/hooks"
import PaymentsDetail from "./payments-detail"
import PaymentsCard from "./payments-card"
import PaymentsMobile from "./payments-mobile"
import useLocale from "@/locale/use-locale"

interface PaymentsLayoutProps {}

const PaymentsLayout: FC<PaymentsLayoutProps> = () => {
  const { lang } = useLocale()

  const { isPhone, isSmTablet } = useViewport()

  const [open, setOpen] = useState<boolean>(false)

  const isResponsive = isPhone || isSmTablet

  const handleTriggerDrawer = (open: boolean) => setOpen(open)

  return (
    <>
      <div className="relative md:grid lg:grid grid-cols-3 gap-4">
        <div className="col-span-2 rounded-[20px] bg-primary-foreground p-4">
          <div className="mb-4 flex items-center justify-between rounded-[20px] bg-black p-2">
            <Paragraph className="text-center text-lg text-white">Payments</Paragraph>
            {isResponsive && (
              <Button variant="secondary" onClick={() => handleTriggerDrawer(true)}>
                <PanelLeft />
              </Button>
            )}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-5">
            <PaymentsCard />
            <PaymentsCard />
            <PaymentsCard />
            <PaymentsCard />
            <PaymentsCard />
            <PaymentsCard />
            <PaymentsCard />
            <PaymentsCard />
            <PaymentsCard />
          </div>
        </div>

        {!isResponsive && (
          <div className="sticky top-30 col-span-1 max-h-min rounded-[20px] bg-primary p-4 text-[16px] text-white">
            <PaymentsDetail />
          </div>
        )}
      </div>

      {isResponsive && <PaymentsMobile open={open} onOpenChange={handleTriggerDrawer} />}
    </>
  )
}

export default PaymentsLayout
