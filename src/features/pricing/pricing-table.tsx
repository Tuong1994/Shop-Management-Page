import { useMemo, useState, type FC } from "react"
import type { ProductPricingData } from "@/models/product/product.type"
import type { ColumnDef } from "@tanstack/react-table"
import { Button } from "@/components/ui/button"
import { MoreHorizontal, Pen } from "lucide-react"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { format } from "date-fns"
import DataTable from "@/components/page/data-table"
import useLocale from "@/locale/use-locale"
import { formatMoney } from "@/lib/utils"

const initialData: ProductPricingData[] = [
  {
    id: "P_1",
    name: "Apple Juice",
    cost: 6.2,
    price: 6.5,
    profit: 0.3,
    changeDate: new Date(),
  },
  {
    id: "P_2",
    name: "Beer Blonde Ale",
    cost: 4.2,
    price: 4.5,
    profit: 0.3,
    changeDate: new Date(),
  },
  {
    id: "P_3",
    name: "Beer Blonde Ale",
    cost: 4.2,
    price: 4.5,
    profit: 0.3,
    changeDate: new Date(),
  },
  {
    id: "P_4",
    name: "Beer Blonde Ale 6-Pack",
    cost: 21.97,
    price: 22.27,
    profit: 0.3,
    changeDate: new Date(),
  },
  {
    id: "P_5",
    name: "Beer Blonde Ale 6-Pack",
    cost: 21.97,
    price: 22.27,
    profit: 0.3,
    changeDate: new Date(),
  },
  {
    id: "P_6",
    name: "Beer Blonde Ale Keg",
    cost: 44.97,
    price: 45.27,
    profit: 0.3,
    changeDate: new Date(),
  },
  {
    id: "P_7",
    name: "Beer Blonde Ale Keg",
    cost: 44.97,
    price: 45.27,
    profit: 0.3,
    changeDate: new Date(),
  },
  {
    id: "P_8",
    name: "Beer Lager",
    cost: 4.7,
    price: 5.0,
    profit: 0.3,
    changeDate: new Date(),
  },
  {
    id: "P_9",
    name: "Beer Lager 6-Pack",
    cost: 23.97,
    price: 24.27,
    profit: 0.3,
    changeDate: new Date(),
  },
]

const PricingTable: FC = () => {
  const { lang } = useLocale()

  const [products, setProducts] = useState<ProductPricingData[]>(initialData)

  const [updatedRowIds, setUpdatedRowIds] = useState<string[]>([])

  const handleTriggerUpdate = (rowId: string) => setUpdatedRowIds((ids) => [...ids, rowId])

  const handleCancelUpdate = (rowId: string) => {
    setUpdatedRowIds((ids) => ids.filter((id) => id !== rowId))
    setProducts((products) =>
      products.map((product) => ({
        ...product,
        price:
          product.id === rowId
            ? initialData.find((data) => data.id === product.id)?.price || 1
            : product.price,
      }))
    )
  }

  const handleChangePrice = (id: string, newPrice: string) => {
    setProducts((products) =>
      products.map((product) => (product.id === id ? { ...product, price: parseInt(newPrice) } : product))
    )
  }

  const handleUpdate = () => console.log(products)

  const columns: ColumnDef<ProductPricingData>[] = useMemo(
    () => [
      {
        accessorKey: "name",
        header: () => <div className="font-bold">{lang.common.table.head.productName}</div>,
      },
      {
        accessorKey: "cost",
        header: () => <div className="font-bold">{lang.common.table.head.cost}</div>,
        cell: ({ row }) => formatMoney(row.original.cost),
      },
      {
        accessorKey: "price",
        header: () => <div className="font-bold">{lang.common.table.head.price}</div>,
        cell: ({ row }) =>
          updatedRowIds.includes(row.original.id) ? (
            <Input
              className="w-20"
              defaultValue={row.original.price}
              onChange={(e) => handleChangePrice(row.original.id, e.target.value)}
            />
          ) : (
            formatMoney(row.original.price)
          ),
      },
      {
        accessorKey: "profit",
        header: () => <div className="font-bold">{lang.common.table.head.profit}</div>,
        cell: ({ row }) => {
          const profit = row.original.price - row.original.cost
          const className = profit > 0 ? "text-green-400" : "text-red-400"
          return <div className={className}>{formatMoney(profit)}</div>
        },
      },
      {
        accessorKey: "changeDate",
        header: () => <div className="font-bold">{lang.common.table.head.changeDate}</div>,
        cell: ({ row }) => row.original.changeDate && format(row.original.changeDate, "dd/MM/yyyy"),
      },
      {
        id: "action",
        cell: ({ row }) => {
          return updatedRowIds.includes(row.original.id) ? (
            <div className="flex max-w-min gap-1">
              <Button variant="secondary" onClick={() => handleCancelUpdate(row.original.id)}>
                {lang.common.actions.cancel}
              </Button>
            </div>
          ) : (
            <DropdownMenu>
              <DropdownMenuTrigger
                render={
                  <Button variant="ghost" className="h-8 w-8 p-0">
                    <span className="sr-only">Open menu</span>
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                }
              />
              <DropdownMenuContent align="end">
                <DropdownMenuGroup>
                  <DropdownMenuItem onClick={() => handleTriggerUpdate(row.original.id)}>
                    <Pen />
                    <span>{lang.common.actions.update}</span>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          )
        },
      },
    ],
    [lang, updatedRowIds]
  )

  return (
    <>
      {updatedRowIds.length > 0 && (
        <div className="mb-4 flex w-full justify-end" onClick={handleUpdate}>
          <Button>{lang.common.actions.save}</Button>
        </div>
      )}
      <DataTable<ProductPricingData> rowKey="id" data={products} columns={columns} />
    </>
  )
}

export default PricingTable
