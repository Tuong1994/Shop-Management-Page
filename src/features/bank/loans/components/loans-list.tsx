import type { FC } from "react"
import { ELoanType } from "../enum"
import LoansListCard from "./loans-list-card"

interface LoansListProps {}

const LoansList: FC<LoansListProps> = () => {
  return (
    <div className="grid grid-col-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
      <LoansListCard loanType={ELoanType.BASIC} />
      <LoansListCard loanType={ELoanType.MEDIUM} />
      <LoansListCard loanType={ELoanType.PROFESSIONAL} />
      <LoansListCard loanType={ELoanType.CORPORATE} />
      <LoansListCard loanType={ELoanType.PREMIUM} />
      <LoansListCard loanType={ELoanType.MEGA} />
    </div>
  )
}

export default LoansList
