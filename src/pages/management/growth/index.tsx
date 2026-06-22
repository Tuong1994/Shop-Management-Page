import type { FC } from "react"
import GrowthCard from "@/features/management/components/growth/growth-card"

const GrowthPage: FC = () => {
  return <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
    {[...Array(20)].map((_, idx) => (
      <GrowthCard key={idx} />
    ))}
  </div>
}

export default GrowthPage
