import { useMemo, useState, type FC } from "react"
import type { ProductPricingData } from "@/models/product/product.type"
import type { ColumnDef } from "@tanstack/react-table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { MoreHorizontal, Pen } from "lucide-react"
import { Input } from "@/components/ui/input"
import { format } from "date-fns"
import DataTable from "@/components/page/data-table"
import useLocale from "@/locale/use-locale"

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
    price: 22.0,
    profit: 0.3,
    changeDate: new Date(),
  },
  {
    id: "P_5",
    name: "Beer Blonde Ale 6-Pack",
    cost: 21.97,
    price: 22.0,
    profit: 0.3,
    changeDate: new Date(),
  },
  {
    id: "P_6",
    name: "Beer Blonde Ale Keg",
    cost: 44.97,
    price: 45.0,
    profit: 0.3,
    changeDate: new Date(),
  },
  {
    id: "P_7",
    name: "Beer Blonde Ale Keg",
    cost: 44.97,
    price: 45.0,
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
    price: 24.0,
    profit: 0.3,
    changeDate: new Date(),
  },
]

const PricingTable: FC = () => {
  const { lang } = useLocale()

  const [products, setProducts] = useState<ProductPricingData[]>(initialData)

  const [updatedRowIds, setUpdatedRowIds] = useState<string[]>([])

  const handleTrigger = (rowIds: string) => {
    setUpdatedRowIds((ids) => {
      if (ids.includes(rowIds)) return ids.filter((id) => id !== rowIds)
      return [...ids, rowIds]
    })
  }

  const handleChangePrice = (id: string, newPrice: number) => {
    setProducts((products) =>
      products.map((product) => (product.id === id ? { ...product, price: newPrice } : product))
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
        cell: ({ row }) => "$" + row.original.cost,
      },
      {
        accessorKey: "price",
        header: () => <div className="font-bold">{lang.common.table.head.price}</div>,
        cell: ({ row }) =>
          updatedRowIds.includes(row.original.id) ? (
            <Input
              className="w-20"
              value={row.original.price}
              onChange={(e) => handleChangePrice(row.original.id, parseInt(e.target.value) | 1)}
            />
          ) : (
            "$" + row.original.price
          ),
      },
      {
        accessorKey: "profit",
        header: () => <div className="font-bold">Profit</div>,
        cell: ({ row }) => "$" + row.original.profit,
      },
      {
        accessorKey: "changeDate",
        header: () => <div className="font-bold">Last change</div>,
        cell: ({ row }) => row.original.changeDate && format(row.original.changeDate, "dd/MM/yyyy"),
      },
      {
        id: "action",
        cell: ({ row }) => {
          return updatedRowIds.includes(row.original.id) ? (
            <div className="flex max-w-min gap-1">
              <Button variant="secondary" onClick={() => handleTrigger(row.original.id)}>
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
                  <DropdownMenuItem onClick={() => handleTrigger(row.original.id)}>
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
