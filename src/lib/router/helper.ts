import type { Location } from "react-router"

export const getRouteWithSub = (baseUrl: string, sub: string) => {
  return baseUrl + "/" + sub
}

export const getRouteSubname = (location: Location) => {
  const pathSplit = location.pathname.split("/")
  const pathname = pathSplit[pathSplit.length - 1]
  return pathname
}
