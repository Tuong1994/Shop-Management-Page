import type { FC } from "react"
import { useViewport } from "@/hooks"
import StaffsListFilterForm from "./list-filter-form"
import StaffsListFilterMobile from "./list-filter-mobile"

interface StaffsListFitlerProps {}

const StaffsListFilter: FC<StaffsListFitlerProps> = () => {
  const {isMobile} = useViewport()

  return !isMobile ? <StaffsListFilterForm /> : <StaffsListFilterMobile />
}

export default StaffsListFilter
