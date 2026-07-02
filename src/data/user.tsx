import type { ReactNode } from "react"
import type { Locale } from "@/locale/type"
import { Badge } from "@/components/ui/badge"
import { EGender, ERole } from "@/models/user/user.enum"

export const renderUserGender = (gender: EGender, lang: Locale) => {
  const genders: Record<EGender, ReactNode> = {
    [EGender.MALE]: (
      <Badge className="bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300">
        {lang.user.gender.male}
      </Badge>
    ),
    [EGender.FEMALE]: (
      <Badge className="bg-pink-50 text-pink-700 dark:bg-pink-950 dark:text-pink-300">
        {lang.user.gender.female}
      </Badge>
    ),
  }
  return genders[gender]
}

export const renderUserRole = (role: ERole, lang: Locale) => {
  switch (role) {
    case ERole.MANAGER: {
      return (
        <Badge className="bg-pink-50 text-pink-700 dark:bg-pink-950 dark:text-pink-300">
          {lang.user.role.manager}
        </Badge>
      )
    }
    case ERole.LEADER: {
      return (
        <Badge className="bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300">
          {lang.user.role.leader}
        </Badge>
      )
    }
    case ERole.CASHIER: {
      return (
        <Badge className="bg-indigo-50 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          {lang.user.role.cashier}
        </Badge>
      )
    }
    case ERole.CUSTOMER_SERVICE: {
      return (
        <Badge className="bg-sky-50 text-sky-700 dark:bg-sky-950 dark:text-sky-300">
          {lang.user.role.customerService}
        </Badge>
      )
    }
    case ERole.STOCKER: {
      return (
        <Badge className="bg-orange-50 text-orange-700 dark:bg-orange-950 dark:text-orange-300">
          {lang.user.role.stocker}
        </Badge>
      )
    }
    case ERole.JANITOR: {
      return (
        <Badge className="bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-300">
          {lang.user.role.janitor}
        </Badge>
      )
    }
    default:
      return (
        <Badge className="bg-red-50 text-red-700 dark:bg-red-950 dark:text-red-300">
          {lang.user.role.security}
        </Badge>
      )
  }
}
