import type { FC } from "react"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { ButtonGroup } from "@/components/ui/button-group"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import type { Product } from "@/models/product/product.type"

interface CartTableProps {}

const products: Pick<Product, "id" | "name" | "price">[] = [
  {
    id: "P_1",
    name: "Apple Juice",
    price: 6.5,
  },
  {
    id: "P_2",
    name: "Beer Blonde Ale Keg",
    price: 4.5,
  },
  {
    id: "P_3",
    name: "Beer Blonde Ale",
    price: 4.5,
  },
  {
    id: "P_4",
    name: "Beer Blonde Ale 6-Pack",
    price: 22.0,
  },
]

const CartTable: FC<CartTableProps> = () => {
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
        {products.map((product) => (
          <TableRow key={product.id}>
            <TableCell className="font-medium">{product.name}</TableCell>
            <TableCell>
              <ButtonGroup>
                <Button>-</Button>
                <Input className="w-10" />
                <Button>+</Button>
              </ButtonGroup>
            </TableCell>
            <TableCell>${product.price}</TableCell>
            <TableCell className="text-right">${product.price}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export default CartTable
