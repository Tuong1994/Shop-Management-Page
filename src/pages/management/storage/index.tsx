import { useMemo, type FC } from "react"
import type { ProductDataTable } from "@/models/product/product.type"
import type { ColumnDef } from "@tanstack/react-table"
import { EProductDisplay, EProductUnit, EStorageStatus } from "@/models/product/product.enum"
import { ERecordStatus } from "@/models/common.enum"
import { renderProductDisplay, renderProductUnit, renderStorageStatus } from "@/data/product"
import { renderRecordStatus } from "@/data/record-status"
import DataTable from "@/components/page/data-table"
import ProductFilter from "@/features/management/components/storage/product-filter"
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
      {
        accessorKey: "name",
        header: () => <div className="font-bold">{lang.common.table.head.productName}</div>,
      },
      {
        accessorKey: "unit",
        header: () => <div className="font-bold">{lang.common.table.head.unit}</div>,
        cell: ({ row }) => renderProductUnit(row.getValue("unit"), lang),
      },
      { accessorKey: "cost", header: () => <div className="font-bold">{lang.common.table.head.cost}</div> },
      { accessorKey: "price", header: () => <div className="font-bold">{lang.common.table.head.price}</div> },
      {
        accessorKey: "items",
        header: () => <div className="text-center font-bold">{lang.common.table.head.items}</div>,
        cell: ({ row }) => <div className="text-center">{row.getValue("items")}</div>,
      },
      { accessorKey: "boxes", header: () => <div className="font-bold">{lang.common.table.head.boxes}</div> },
      {
        accessorKey: "amount",
        header: () => <div className="font-bold">{lang.common.table.head.amount}</div>,
      },
      {
        accessorKey: "display",
        header: () => <div className="font-bold">{lang.common.table.head.display}</div>,
        cell: ({ row }) => renderProductDisplay(row.getValue("display"), lang),
      },
      {
        accessorKey: "supplier",
        header: () => <div className="font-bold">{lang.common.table.head.supplier}</div>,
      },
      {
        accessorKey: "storageStatus",
        header: () => <div className="font-bold">{lang.common.table.head.storage}</div>,
        cell: ({ row }) => renderStorageStatus(row.getValue("storageStatus"), lang),
      },
      {
        accessorKey: "status",
        header: () => <div className="font-bold">{lang.common.table.head.status}</div>,
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
      onRowRemove={(rows) => console.log(rows)}
      renderFilter={(table) => <ProductFilter table={table} />}
    />
  )
}

export default StoragePage
