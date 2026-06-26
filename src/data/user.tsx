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
  const roles: Record<ERole, ReactNode> = {
    [ERole.MANAGER]: (
      <Badge className="bg-pink-50 text-pink-700 dark:bg-pink-950 dark:text-pink-300">
        {lang.user.role.manager}
      </Badge>
    ),
    [ERole.LEADER]: (
      <Badge className="bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300">
        {lang.user.role.leader}
      </Badge>
    ),
    [ERole.STAFF]: (
      <Badge className="bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-300">
        {lang.user.role.staff}
      </Badge>
    ),
  }
  return roles[role]
}
