import { useMemo, type FC } from "react"
import type { ProductDataTable } from "@/models/product/product.type"
import type { ColumnDef } from "@tanstack/react-table"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { EProductDisplay, EProductUnit, EStorageStatus } from "@/models/product/product.enum"
import { ERecordStatus } from "@/models/common.enum"
import { renderProductDisplay, renderProductUnit, renderStorageStatus } from "@/data/product"
import { renderRecordStatus } from "@/data/record-status"
import useLocale from "@/locale/use-locale"
import DataTable from "@/components/page/data-table"

const products: ProductDataTable[] = [
  {
    id: "P_1",
    name: "Apple Juice",
    supplier: "Bio Juice",
    items: 16,
    boxes: 10,
    amount: 160,
    cost: 6.2,
    price: 6.5,
    display: EProductDisplay.FRIDGE,
    unit: EProductUnit.BOTTLE,
    status: ERecordStatus.ACTIVE,
    storageStatus: EStorageStatus.IN_STOCK,
  },
  {
    id: "P_2",
    name: "Beer Blonde Ale",
    supplier: "Fess",
    items: 15,
    boxes: 10,
    amount: 150,
    cost: 4.2,
    price: 4.5,
    display: EProductDisplay.FRIDGE,
    unit: EProductUnit.BOTTLE,
    status: ERecordStatus.ACTIVE,
    storageStatus: EStorageStatus.IN_STOCK,
  },
  {
    id: "P_3",
    name: "Beer Blonde Ale",
    supplier: "BK",
    items: 15,
    boxes: 10,
    amount: 150,
    cost: 4.2,
    price: 4.5,
    display: EProductDisplay.FRIDGE,
    unit: EProductUnit.BOTTLE,
    status: ERecordStatus.ACTIVE,
    storageStatus: EStorageStatus.IN_STOCK,
  },
  {
    id: "P_4",
    name: "Beer Blonde Ale 6-Pack",
    supplier: "Fess",
    items: 9,
    boxes: 10,
    amount: 90,
    cost: 21.97,
    price: 22.0,
    display: EProductDisplay.SHELF,
    unit: EProductUnit.PACK,
    status: ERecordStatus.ACTIVE,
    storageStatus: EStorageStatus.IN_STOCK,
  },
  {
    id: "P_5",
    name: "Beer Blonde Ale 6-Pack",
    supplier: "BK",
    items: 9,
    boxes: 10,
    amount: 90,
    cost: 21.97,
    price: 22.0,
    display: EProductDisplay.SHELF,
    unit: EProductUnit.PACK,
    status: ERecordStatus.ACTIVE,
    storageStatus: EStorageStatus.IN_STOCK,
  },
  {
    id: "P_6",
    name: "Beer Blonde Ale Keg",
    supplier: "Fess",
    items: 6,
    boxes: 10,
    amount: 160,
    cost: 44.97,
    price: 45.0,
    display: EProductDisplay.SHELF,
    unit: EProductUnit.KEG,
    status: ERecordStatus.ACTIVE,
    storageStatus: EStorageStatus.IN_STOCK,
  },
  {
    id: "P_7",
    name: "Beer Blonde Ale Keg",
    supplier: "Degl",
    items: 6,
    boxes: 10,
    amount: 160,
    cost: 44.97,
    price: 45.0,
    display: EProductDisplay.SHELF,
    unit: EProductUnit.KEG,
    status: ERecordStatus.ACTIVE,
    storageStatus: EStorageStatus.IN_STOCK,
  },
  {
    id: "P_8",
    name: "Beer Lager",
    supplier: "Teochew",
    items: 15,
    boxes: 10,
    amount: 150,
    cost: 4.7,
    price: 5.0,
    display: EProductDisplay.FRIDGE,
    unit: EProductUnit.BOTTLE,
    status: ERecordStatus.ACTIVE,
    storageStatus: EStorageStatus.IN_STOCK,
  },
  {
    id: "P_9",
    name: "Beer Lager 6-Pack",
    supplier: "Teochew",
    items: 9,
    boxes: 10,
    amount: 90,
    cost: 23.97,
    price: 24.0,
    unit: EProductUnit.PACK,
    display: EProductDisplay.SHELF,
    status: ERecordStatus.ACTIVE,
    storageStatus: EStorageStatus.IN_STOCK,
  },
]

const StoragePage: FC = () => {
  const { lang } = useLocale()

  const columns: ColumnDef<ProductDataTable>[] = useMemo(
    () => [
      { accessorKey: "name", header: "Product name", },
      { accessorKey: "unit", header: "Unit" },
      { accessorKey: "cost", header: "Cost" },
      { accessorKey: "price", header: "Price" },
      { accessorKey: "items", header: "Items per box" },
      { accessorKey: "boxes", header: "Boxes" },
      { accessorKey: "amount", header: "Amount" },
      { accessorKey: "display", header: "Display" },
      { accessorKey: "supplier", header: "Supplier" },
      { accessorKey: "storageStatus", header: "Storage" },
      { accessorKey: "status", header: "Status" },
    ],
    [lang]
  )

  return (
    <>
      <DataTable<ProductDataTable> data={products} columns={columns} />
      {/* <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-25 font-bold">Product name</TableHead>
            <TableHead className="font-bold">Unit</TableHead>
            <TableHead className="font-bold">Cost</TableHead>
            <TableHead className="font-bold">Price</TableHead>
            <TableHead className="text-center font-bold">Items per box</TableHead>
            <TableHead className="font-bold">Boxes</TableHead>
            <TableHead className="font-bold">Amount</TableHead>
            <TableHead className="font-bold">Display</TableHead>
            <TableHead className="font-bold">Supplier</TableHead>
            <TableHead className="font-bold">Storage</TableHead>
            <TableHead className="font-bold">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product) => (
            <TableRow key={product.id}>
              <TableCell className="font-medium">{product.name}</TableCell>
              <TableCell>{renderProductUnit(product.unit, lang)}</TableCell>
              <TableCell>{product.cost}</TableCell>
              <TableCell>{product.price}</TableCell>
              <TableCell className="text-center">{product.items}</TableCell>
              <TableCell>{product.boxes}</TableCell>
              <TableCell>{product.amount}</TableCell>
              <TableCell>{renderProductDisplay(product.display, lang)}</TableCell>
              <TableCell>{product.supplier}</TableCell>
              <TableCell>{renderStorageStatus(product.storageStatus, lang)}</TableCell>
              <TableCell>{renderRecordStatus(product.status, lang)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table> */}
    </>
  )
}

export default StoragePage
