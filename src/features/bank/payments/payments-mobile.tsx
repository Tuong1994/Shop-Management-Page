import type { FC } from "react"
import { Drawer, DrawerContent } from "@/components/ui/drawer"
import PaymentsDetail from "./payments-detail"

interface PaymentsMobileProps {
  open?: boolean
  onOpenChange?: (open: boolean) => void
}

const PaymentsMobile: FC<PaymentsMobileProps> = ({ open, onOpenChange }) => {
  return (
    <Drawer direction="right" open={open} onOpenChange={onOpenChange}>
      <DrawerContent>
        <PaymentsDetail />
      </DrawerContent>
    </Drawer>
  )
}

export default PaymentsMobile
