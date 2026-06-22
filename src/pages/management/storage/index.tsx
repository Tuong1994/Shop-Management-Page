import type { FC } from "react"
import type { ProductDataTable } from "@/models/product/product.type"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { EProductDisplay, EProductUnit, EStorageStatus } from "@/models/product/product.enum"
import { ERecordStatus } from "@/models/common.enum"

const products: ProductDataTable = [
  {
    id: "P_1",
    name: "Apple Juice",
    supplier: "Bio Juice",
    display: EProductDisplay.FRIDGE,
    items: 16,
    boxes: 10,
    amount: 160,
    unit: EProductUnit.BOTTLE,
    cost: 6.2,
    price: 6.5,
    status: ERecordStatus.ACTIVE,
    storageStatus: EStorageStatus.IN_STOCK,
  },
  {
    id: "P_2",
    name: "Beer Blonde Ale",
    supplier: "Fess",
    display: EProductDisplay.FRIDGE,
    items: 15,
    boxes: 10,
    amount: 150,
    unit: EProductUnit.BOTTLE,
    cost: 4.2,
    price: 4.5,
    status: ERecordStatus.ACTIVE,
    storageStatus: EStorageStatus.IN_STOCK,
  },
  {
    id: "P_3",
    name: "Beer Blonde Ale",
    supplier: "BK",
    display: EProductDisplay.FRIDGE,
    items: 15,
    boxes: 10,
    amount: 150,
    unit: EProductUnit.BOTTLE,
    cost: 4.2,
    price: 4.5,
    status: ERecordStatus.ACTIVE,
    storageStatus: EStorageStatus.IN_STOCK,
  },
  {
    id: "P_4",
    name: "Beer Blonde Ale 6-Pack",
    supplier: "Fess",
    display: EProductDisplay.SHELF,
    items: 9,
    boxes: 10,
    amount: 90,
    unit: EProductUnit.PACK,
    cost: 21.97,
    price: 22.0,
    status: ERecordStatus.ACTIVE,
    storageStatus: EStorageStatus.IN_STOCK,
  },
  {
    id: "P_5",
    name: "Beer Blonde Ale 6-Pack",
    supplier: "BK",
    display: EProductDisplay.SHELF,
    items: 9,
    boxes: 10,
    amount: 90,
    unit: EProductUnit.PACK,
    cost: 21.97,
    price: 22.0,
    status: ERecordStatus.ACTIVE,
    storageStatus: EStorageStatus.IN_STOCK,
  },
  {
    id: "P_6",
    name: "Beer Blonde Ale Keg",
    supplier: "Fess",
    display: EProductDisplay.SHELF,
    items: 6,
    boxes: 10,
    amount: 160,
    unit: EProductUnit.KEG,
    cost: 44.97,
    price: 45.0,
    status: ERecordStatus.ACTIVE,
    storageStatus: EStorageStatus.IN_STOCK,
  },
  {
    id: "P_7",
    name: "Beer Blonde Ale Keg",
    supplier: "Degl",
    display: EProductDisplay.SHELF,
    items: 6,
    boxes: 10,
    amount: 160,
    unit: EProductUnit.KEG,
    cost: 44.97,
    price: 45.0,
    status: ERecordStatus.ACTIVE,
    storageStatus: EStorageStatus.IN_STOCK,
  },
  {
    id: "P_8",
    name: "Beer Lager",
    supplier: "Teochew",
    display: EProductDisplay.FRIDGE,
    items: 15,
    boxes: 10,
    amount: 150,
    unit: EProductUnit.BOTTLE,
    cost: 4.7,
    price: 5.0,
    status: ERecordStatus.ACTIVE,
    storageStatus: EStorageStatus.IN_STOCK,
  },
  {
    id: "P_9",
    name: "Beer Lager 6-Pack",
    supplier: "Teochew",
    display: EProductDisplay.SHELF,
    items: 9,
    boxes: 10,
    amount: 90,
    unit: EProductUnit.PACK,
    cost: 23.97,
    price: 24.0,
    status: ERecordStatus.ACTIVE,
    storageStatus: EStorageStatus.IN_STOCK,
  },
]

const StoragePage: FC = () => {
  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-25 font-bold">Product name</TableHead>
            <TableHead className="font-bold">Unit</TableHead>
            <TableHead className="font-bold">Cost</TableHead>
            <TableHead className="text-right font-bold">Price</TableHead>
            <TableHead className="text-right font-bold">Items per box</TableHead>
            <TableHead className="text-right font-bold">Boxes</TableHead>
            <TableHead className="text-right font-bold">Amount</TableHead>
            <TableHead className="text-right font-bold">Display</TableHead>
            <TableHead className="text-right font-bold">Supplier</TableHead>
            <TableHead className="text-right font-bold">Storage</TableHead>
            <TableHead className="text-right font-bold">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product) => (
            <TableRow key={product.id}>
              <TableCell className="font-medium">{product.name}</TableCell>
              <TableCell>{product.unit}</TableCell>
              <TableCell>{product.cost}</TableCell>
              <TableCell>{product.price}</TableCell>
              <TableCell>{product.items}</TableCell>
              <TableCell>{product.boxes}</TableCell>
              <TableCell>{product.amount}</TableCell>
              <TableCell>{product.display}</TableCell>
              <TableCell>{product.supplier}</TableCell>
              <TableCell>{product.storageStatus}</TableCell>
              <TableCell>{product.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  )
}

export default StoragePage
