import { useState, type FC } from "react"
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Filter } from "lucide-react"
import StaffsListFilterForm from "./list-filter-form"
import useLocale from "@/locale/use-locale"

interface StaffsListFilterMobileProps {}

const StaffsListFilterMobile: FC<StaffsListFilterMobileProps> = () => {
  const { lang } = useLocale()

  const [open, setOpen] = useState<boolean>(false)

  const handleTrigger = (open: boolean) => {
    setOpen(open)
  }

  return (
    <Sheet open={open} onOpenChange={handleTrigger}>
      <SheetTrigger
        render={
          <Button variant="outline">
            <Filter />
          </Button>
        }
      />
      <SheetContent showCloseButton={false} className="overflow-y-auto p-2">
        <SheetHeader className="px-2 font-semibold">{lang.common.actions.filter}</SheetHeader>
        <StaffsListFilterForm onCancel={() => handleTrigger(false)} />
      </SheetContent>
    </Sheet>
  )
}

export default StaffsListFilterMobile
