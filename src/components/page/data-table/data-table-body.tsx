import { TableBody, TableCell, TableRow } from "@/components/ui/table"
import { flexRender, type Table, type ColumnDef } from "@tanstack/react-table"

interface DataTableBodyProps<T> {
  table: Table<T>
  columns: ColumnDef<T>[]
}

const DataTableBody = <T extends object>({ table, columns }: DataTableBodyProps<T>) => {
  return (
    <TableBody>
      {table.getRowModel().rows?.length ? (
        table.getRowModel().rows.map((row) => (
          <TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
            {row.getVisibleCells().map((cell) => (
              <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
            ))}
          </TableRow>
        ))
      ) : (
        <TableRow>
          <TableCell colSpan={columns.length} className="h-24 text-center">
            No results.
          </TableCell>
        </TableRow>
      )}
    </TableBody>
  )
}

export default DataTableBody
