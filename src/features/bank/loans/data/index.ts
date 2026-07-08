import type { Locale } from "@/locale/type"
import { ELoanType } from "../enum"

export const renderLoanTitle = (loan: ELoanType, lang: Locale) => {
  const titles: Record<ELoanType, string> = {
    [ELoanType.BASIC]: lang.bank.loanType.basic,
    [ELoanType.MEDIUM]: lang.bank.loanType.medium,
    [ELoanType.PROFESSIONAL]: lang.bank.loanType.professional,
    [ELoanType.CORPORATE]: lang.bank.loanType.corporate,
    [ELoanType.PREMIUM]: lang.bank.loanType.premium,
    [ELoanType.MEGA]: lang.bank.loanType.mega,
  }
  return titles[loan]
}

export const renderLoanAmount = (loan: ELoanType) => {
  const amounts: Record<ELoanType, number> = {
    [ELoanType.BASIC]: 750.0,
    [ELoanType.MEDIUM]: 2000.0,
    [ELoanType.PROFESSIONAL]: 5000.0,
    [ELoanType.CORPORATE]: 15000.0,
    [ELoanType.PREMIUM]: 50000.0,
    [ELoanType.MEGA]: 100000.0,
  }
  return amounts[loan]
}

export const renderLoanInterest = (loan: ELoanType) => {
  const interests: Record<ELoanType, number> = {
    [ELoanType.BASIC]: 0.01,
    [ELoanType.MEDIUM]: 0.02,
    [ELoanType.PROFESSIONAL]: 0.03,
    [ELoanType.CORPORATE]: 0.04,
    [ELoanType.PREMIUM]: 0.06,
    [ELoanType.MEGA]: 0.08,
  }
  return interests[loan]
}
