import type { FC } from "react"
import HiringListCard from "./hiring-list-card"

interface HiringListProps {}

const HiringList: FC<HiringListProps> = () => {
  return (
    <div className="grid grid-cols-4">
      <HiringListCard />
    </div>
  )
}

export default HiringList
