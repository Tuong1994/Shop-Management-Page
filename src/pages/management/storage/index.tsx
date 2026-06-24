import { useMemo, type FC } from "react"
import type { ProductDataTable } from "@/models/product/product.type"
import type { ColumnDef } from "@tanstack/react-table"
import { EProductDisplay, EProductUnit, EStorageStatus } from "@/models/product/product.enum"
import { ERecordStatus } from "@/models/common.enum"
import { renderProductDisplay, renderProductUnit, renderStorageStatus } from "@/data/product"
import { renderRecordStatus } from "@/data/record-status"
import { Field, FieldGroup } from "@/components/ui/field"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group"
import { Search } from "lucide-react"
import DataTable from "@/components/page/data-table"
import useLocale from "@/locale/use-locale"

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
      { accessorKey: "name", header: () => <div className="font-bold">Product name</div> },
      {
        accessorKey: "unit",
        header: () => <div className="font-bold">Unit</div>,
        cell: ({ row }) => renderProductUnit(row.getValue("unit"), lang),
      },
      { accessorKey: "cost", header: () => <div className="font-bold">Cost</div> },
      { accessorKey: "price", header: () => <div className="font-bold">Price</div> },
      {
        accessorKey: "items",
        header: () => <div className="text-center font-bold">Items per box</div>,
        cell: ({ row }) => <div className="text-center">{row.getValue("items")}</div>,
      },
      { accessorKey: "boxes", header: () => <div className="font-bold">Boxes</div> },
      { accessorKey: "amount", header: () => <div className="font-bold">Amount</div> },
      {
        accessorKey: "display",
        header: () => <div className="font-bold">Display</div>,
        cell: ({ row }) => renderProductDisplay(row.getValue("display"), lang),
      },
      { accessorKey: "supplier", header: () => <div className="font-bold">Supplier</div> },
      {
        accessorKey: "storageStatus",
        header: () => <div className="font-bold">Storage</div>,
        cell: ({ row }) => renderStorageStatus(row.getValue("storageStatus"), lang),
      },
      {
        accessorKey: "status",
        header: () => <div className="font-bold">Status</div>,
        cell: ({ row }) => renderRecordStatus(row.getValue("status"), lang),
      },
    ],
    [lang]
  )

  return (
    <DataTable<ProductDataTable>
      hasSelection
      hasFilter
      hasPaging
      rowKey="id"
      data={products}
      columns={columns}
      onRowSelection={(rows) => console.log(rows)}
      renderFilter={(table) => (
        <FieldGroup className="grid grid-cols-1 gap-2 sm:grid-cols-3 md:grid-cols-3 lg:w-150 lg:grid-cols-3">
          <Field className="w-full">
            <InputGroup>
              <InputGroupInput placeholder={`${lang.common.form.placeholder.search}...`} />
              <InputGroupAddon align="inline-end">
                <Search />
              </InputGroupAddon>
            </InputGroup>
          </Field>
          <Field>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder={lang.common.form.placeholder.display} />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Fruits</SelectLabel>
                  <SelectItem value="apple">Apple</SelectItem>
                  <SelectItem value="banana">Banana</SelectItem>
                  <SelectItem value="blueberry">Blueberry</SelectItem>
                  <SelectItem value="grapes">Grapes</SelectItem>
                  <SelectItem value="pineapple">Pineapple</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </Field>
          <Field>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder={lang.common.form.placeholder.category} />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Fruits</SelectLabel>
                  <SelectItem value="apple">Apple</SelectItem>
                  <SelectItem value="banana">Banana</SelectItem>
                  <SelectItem value="blueberry">Blueberry</SelectItem>
                  <SelectItem value="grapes">Grapes</SelectItem>
                  <SelectItem value="pineapple">Pineapple</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </Field>
        </FieldGroup>
      )}
    />
  )
}

export default StoragePage
