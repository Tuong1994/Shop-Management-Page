import { useState, type FC } from "react"
import { ERole } from "@/models/user/user.enum"
import HiringListCard from "./hiring-list-card"
import HiringCardModal from "./hiring-list-card/card-modal"
import HiringListCarousel from "./hiring-list-carousel"

interface HiringListProps {}

const HiringList: FC<HiringListProps> = () => {
  const [openModal, setOpenModal] = useState<boolean>(false)

  const handleTriggerModal = (open: boolean) => setOpenModal(open)

  return (
    <>
      <HiringListCarousel role={ERole.CASHIER}>
        <HiringListCard role={ERole.CASHIER} onMore={handleTriggerModal} />
      </HiringListCarousel>

       <HiringListCarousel role={ERole.CUSTOMER_SERVICE}>
        <HiringListCard role={ERole.CUSTOMER_SERVICE} onMore={handleTriggerModal} />
      </HiringListCarousel>

       <HiringListCarousel role={ERole.STOCKER}>
        <HiringListCard role={ERole.STOCKER} onMore={handleTriggerModal} />
      </HiringListCarousel>

       <HiringListCarousel role={ERole.JANITOR}>
        <HiringListCard role={ERole.JANITOR} onMore={handleTriggerModal} />
      </HiringListCarousel>

       <HiringListCarousel role={ERole.SECURITY}>
        <HiringListCard role={ERole.SECURITY} onMore={handleTriggerModal} />
      </HiringListCarousel>

      <HiringCardModal open={openModal} onOpenChange={handleTriggerModal} />
    </>
  )
}

export default HiringList
