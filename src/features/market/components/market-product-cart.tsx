import type { FC } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Avatar, AvatarBadge, AvatarFallback } from "@/components/ui/avatar"
import { ShoppingCart } from "lucide-react"

const MarketProductCart: FC = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <Avatar className="cursor-pointer">
          <AvatarFallback>
            <ShoppingCart size={20} />
          </AvatarFallback>
          <AvatarBadge className="min-h-3 min-w-3 bg-red-500 text-[7px]">10</AvatarBadge>
        </Avatar>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your account and remove your data from
            our servers.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

export default MarketProductCart
