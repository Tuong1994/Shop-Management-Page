import type { FC, ReactNode } from "react"
import { Link } from "react-router"
import { Card } from "@/components/ui/card"
import { HdIcon } from "lucide-react"
import { routerPaths } from "@/lib/router/paths"

interface HomeItemProps {
  path?: string
  icon?: ReactNode
  name?: ReactNode
}

const HomeItem: FC<HomeItemProps> = ({ path = routerPaths.HOME, icon = <HdIcon />, name = "Name" }) => {
  return (
    <Link to={path}>
      <Card className="group flex cursor-pointer flex-col items-center justify-center transition-colors hover:bg-primary hover:text-white">
        <div className="transition-transform group-hover:scale-120">{icon}</div>
        <span className="text-xl font-semibold text-primary transition-colors group-hover:text-white">
          {name}
        </span>
      </Card>
    </Link>
  )
}

export default HomeItem
