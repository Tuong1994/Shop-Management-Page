import type { FC, ReactNode } from "react"

interface AuthLayoutProps {
  children?: ReactNode
}

const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div className="flex h-screen">
      <div className="h-full w-1/2 bg-[url(/banner.jpg)] bg-no-repeat bg-cover">
      </div>
      <div className="flex h-full w-1/2 items-center justify-center px-50">{children}</div>
    </div>
  )
}

export default AuthLayout
