import type { FC, ReactNode } from "react"

interface AuthLayoutProps {
  children?: ReactNode
}

const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div className="flex items-center justify-center 3xs:min-h-screen lg:h-screen">
      <div className="h-full sm:hidden lg:block lg:w-1/3 bg-[url(/banner.jpg)] bg-no-repeat bg-cover bg-center">
      </div>
      <div className="flex h-full 3xs:w-full lg:w-2/3 items-center justify-center 3xs:px-2.5 md:px-40 lg:px-30 xl:px-70 py-2.5">{children}</div>
    </div>
  )
}

export default AuthLayout
