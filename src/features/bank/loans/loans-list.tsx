import type { FC } from "react"
import LoansListCard from "./loans-list-card"

interface LoansListProps {}

const LoansList: FC<LoansListProps> = () => {
  return <div className="grid grid-cols-3 gap-10">
    <LoansListCard />
    <LoansListCard />
    <LoansListCard />
  </div>
}

export default LoansList
