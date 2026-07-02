import { useState, type FC } from "react"
import HiringListCard from "./hiring-list-card"
import HiringCardModal from "./hiring-list-card/card-modal"

interface HiringListProps {}

const HiringList: FC<HiringListProps> = () => {
  const [openModal, setOpenModal] = useState<boolean>(false)

  const handleTriggerModal = (open: boolean) => setOpenModal(open)

  return (
    <>
      <div className="grid grid-cols-4">
        <HiringListCard onMore={handleTriggerModal} />
      </div>
      <HiringCardModal open={openModal} onOpenChange={handleTriggerModal} />
    </>
  )
}

export default HiringList
