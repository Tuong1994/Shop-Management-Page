import type { FC } from "react"
import { Outlet } from "react-router"
import AuthLayout from "@/features/auth/auth-layout"
import AppLocale from "@/AppLocale"

const AuthPage: FC = () => {
  return (
    <AppLocale>
      <AuthLayout>
        <Outlet />
      </AuthLayout>
    </AppLocale>
  )
}

export default AuthPage
