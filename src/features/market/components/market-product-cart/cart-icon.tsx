import type { FC } from "react"
import { Avatar, AvatarBadge, AvatarFallback } from "@/components/ui/avatar"
import { ShoppingCart } from "lucide-react"

const CartIcon: FC = () => {
  return (
    <Avatar>
      <AvatarFallback>
        <ShoppingCart size={20} />
      </AvatarFallback>
      <AvatarBadge className="min-h-3 min-w-3 bg-red-500 text-[7px]">10</AvatarBadge>
    </Avatar>
  )
}

export default CartIcon
