import { useMemo, useState, type FC } from "react"
import type { UserDataTable } from "@/models/user/user.type"
import type { ColumnDef } from "@tanstack/react-table"
import { renderUserGender, renderUserRole } from "@/data/user"
import { formatPhoneNumber } from "@/lib/utils"
import { EGender, ERole } from "@/models/user/user.enum"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { MoreHorizontal, Pen } from "lucide-react"
import dayjs from "dayjs"
import DataTable from "@/components/page/data-table"
import StaffsListFilter from "./staffs-list-filter"
import useLocale from "@/locale/use-locale"
import StaffsListForm from "./staffs-list-form"

const users: UserDataTable[] = [
  {
    id: "US_1",
    email: "nhambontuong68@gmail.com",
    fullName: "Jack Anderson",
    phone: "0793229970",
    birthday: "1994-11-28T00:00:00.000Z",
    gender: EGender.MALE,
    role: ERole.MANAGER,
  },
  {
    id: "US_2",
    email: "claire@example.com",
    fullName: "Claire Redfield",
    phone: "0593114491",
    birthday: "1997-11-28T00:00:00.000Z",
    gender: EGender.FEMALE,
    role: ERole.LEADER,
  },
  {
    id: "US_3",
    email: "kevin@example.com",
    fullName: "Kevin Kowalski",
    phone: "0793886681",
    birthday: "1984-01-15T00:00:00.000Z",
    gender: EGender.MALE,
    role: ERole.STOCKER,
  },
  {
    id: "US_4",
    email: "bill@example.com",
    fullName: "Bill Batson",
    phone: "0854266700",
    birthday: "1994-01-15T00:00:00.000Z",
    gender: EGender.MALE,
    role: ERole.STOCKER,
  },
  {
    id: "US_5",
    email: "emily@example.com",
    fullName: "Emily Castle",
    phone: "0793886671",
    birthday: "1997-02-28T00:00:00.000Z",
    gender: EGender.FEMALE,
    role: ERole.CASHIER,
  },
  {
    id: "US_6",
    email: "anna@example.com",
    fullName: "Anna Pennyworth",
    phone: "0593886651",
    birthday: "2000-11-15T00:00:00.000Z",
    gender: EGender.FEMALE,
    role: ERole.CASHIER,
  },
  {
    id: "US_7",
    email: "John@example.com",
    fullName: "John Drake",
    phone: "0793886651",
    birthday: "1999-09-28T00:00:00.000Z",
    gender: EGender.MALE,
    role: ERole.STOCKER,
  },
  {
    id: "US_8",
    email: "ben@example.com",
    fullName: "Ben Anderson",
    phone: "0793664475",
    birthday: "1993-01-15T00:00:00.000Z",
    gender: EGender.MALE,
    role: ERole.JANITOR,
  },
  {
    id: "US_9",
    email: "eva@example.com",
    fullName: "Eva Queen",
    phone: "0793886687",
    birthday: "1990-11-15T00:00:00.000Z",
    gender: EGender.FEMALE,
    role: ERole.CUSTOMER_SERVICE,
  },
  {
    id: "US_10",
    email: "evan@example.com",
    fullName: "Evan Todd",
    phone: "0793885541",
    birthday: "1995-03-10T00:00:00.000Z",
    gender: EGender.MALE,
    role: ERole.SECURITY,
  },
]

interface StaffsListProps {}

const StaffsList: FC<StaffsListProps> = () => {
  dayjs.locale("vi")

  const { lang } = useLocale()

  const [openForm, setOpenForm] = useState<boolean>(false)

  const handleTrigger = (open: boolean) => setOpenForm(open)

  const columns: ColumnDef<UserDataTable>[] = useMemo(
    () => [
      {
        accessorKey: "email",
        header: () => <div className="font-bold">{lang.common.table.head.email}</div>,
      },
      {
        accessorKey: "fullName",
        header: () => <div className="font-bold">{lang.common.table.head.customerName}</div>,
      },
      {
        accessorKey: "phone",
        header: () => <div className="font-bold">{lang.common.table.head.phone}</div>,
        cell: ({ row }) => formatPhoneNumber(row.getValue("phone"), "VN"),
      },
      {
        accessorKey: "gender",
        header: () => <div className="font-bold">{lang.common.table.head.gender}</div>,
        cell: ({ row }) => renderUserGender(row.getValue("gender"), lang),
      },
      {
        accessorKey: "birthday",
        header: () => <div className="font-bold">{lang.common.table.head.birthday}</div>,
        cell: ({ row }) => dayjs(row.getValue("birthday")).format("DD/MM/YYYY"),
      },
      {
        accessorKey: "role",
        header: () => <div className="font-bold">{lang.common.table.head.role}</div>,
        cell: ({ row }) => renderUserRole(row.getValue("role"), lang),
      },
      {
        id: "action",
        cell: () => {
          return (
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
                  <DropdownMenuItem onClick={() => handleTrigger(true)}>
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
    [lang]
  )

  return (
    <>
      <DataTable<UserDataTable>
        hasSelection
        hasFilter
        hasPaging
        rowKey="id"
        data={users}
        columns={columns}
        renderFilter={() => <StaffsListFilter />}
      />
      <StaffsListForm open={openForm} onOpenChange={handleTrigger} />
    </>
  )
}

export default StaffsList
