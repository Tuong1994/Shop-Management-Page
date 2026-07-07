import { ERole } from "@/models/user/user.enum"
import type { Locale } from "@/locale/type"
import type { ReactNode } from "react"

export const getCardColorByRole = (role: ERole) => {
  const colors: Record<ERole, string> = {
    [ERole.MANAGER]: "bg-pink-700",
    [ERole.LEADER]: "bg-blue-700",
    [ERole.CASHIER]: "bg-indigo-700",
    [ERole.CUSTOMER_SERVICE]: "bg-sky-700",
    [ERole.STOCKER]: "bg-orange-700",
    [ERole.JANITOR]: "bg-green-700",
    [ERole.SECURITY]: "bg-red-700",
  }
  return colors[role] || "bg-gray-300"
}

export const renderJobTitle = (role: ERole, lang: Locale) => {
  const titles: Record<ERole, ReactNode> = {
    [ERole.MANAGER]: lang.user.role.manager,
    [ERole.LEADER]: lang.user.role.leader,
    [ERole.CASHIER]: lang.user.role.cashier,
    [ERole.CUSTOMER_SERVICE]: lang.user.role.customerService,
    [ERole.STOCKER]: lang.user.role.stocker,
    [ERole.JANITOR]: lang.user.role.janitor,
    [ERole.SECURITY]: lang.user.role.security,
  }
  return titles[role]
}

export const renderJobDescript = (role: ERole, lang: Locale) => {
  const descripts: Record<ERole, ReactNode> = {
    [ERole.MANAGER]: lang.management.hiring.manager,
    [ERole.LEADER]: lang.management.hiring.leader,
    [ERole.CASHIER]: lang.management.hiring.cashier,
    [ERole.CUSTOMER_SERVICE]: lang.management.hiring.customerService,
    [ERole.STOCKER]: lang.management.hiring.stocker,
    [ERole.JANITOR]: lang.management.hiring.janitor,
    [ERole.SECURITY]: lang.management.hiring.security,
  }
  return descripts[role]
}
