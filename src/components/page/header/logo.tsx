import type { FC } from "react"
import { routerPaths } from "@/lib/router/paths"
import { useNavigate } from "react-router"

const Logo: FC = () => {
  const navigate = useNavigate()

  const handleNavigate = () => navigate(routerPaths.HOME)

  return (
    <div className="cursor-pointer" onClick={handleNavigate}>
      <div className="text-xl font-bold text-primary">Shop</div>
      <div className="text-[10px]">Management</div>
    </div>
  )
}

export default Logo
