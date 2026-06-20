import { useState, type FC } from "react"
import type { CartItem } from "@/models/cart/cart.type"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import QuantityControl from "@/components/page/quantity-control"

interface CartTableProps {}

const initialCartItems: Pick<CartItem, "id" | "product" | "quantity">[] = [
  {
    id: "C_1",
    quantity: 1,
    product: { id: "P_1", name: "Apple Juice", price: 6.5 },
  },
  {
    id: "C_2",
    quantity: 1,
    product: { id: "P_2", name: "Beer Blonde Ale Keg", price: 4.5 },
  },
  {
    id: "C_3",
    quantity: 1,
    product: { id: "P_3", name: "Beer Blonde Ale", price: 4.5 },
  },
  {
    id: "C_4",
    quantity: 1,
    product: { id: "P_4", name: "Beer Blonde Ale 6-Pack", price: 22.0 },
  },
]

const CartTable: FC<CartTableProps> = () => {
  const [cartItems, setCartItems] =
    useState<Pick<CartItem, "id" | "product" | "quantity">[]>(initialCartItems)

  const handleUpdateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return
    setCartItems((prev) => prev.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)))
  }

  return (
    <Table>
      <TableCaption>A list of your recent products.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-25 font-bold">Product name</TableHead>
          <TableHead className="font-bold">Unit</TableHead>
          <TableHead className="font-bold">Price</TableHead>
          <TableHead className="text-right font-bold">Total</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {cartItems.map((item) => (
          <TableRow key={item.id}>
            <TableCell className="font-medium">{item.product.name}</TableCell>
            <TableCell>
              <QuantityControl
                minusButtonProps={{ onClick: () => handleUpdateQuantity(item.id, item.quantity - 1) }}
                plusButtonProps={{ onClick: () => handleUpdateQuantity(item.id, item.quantity + 1) }}
                inputProps={{
                  value: item.quantity,
                  onChange: (e) => handleUpdateQuantity(item.id, parseInt(e.target.value) || 1),
                }}
              />
            </TableCell>
            <TableCell>${item.product.price}</TableCell>
            <TableCell className="text-right">${item.product.price * item.quantity}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export default CartTable
