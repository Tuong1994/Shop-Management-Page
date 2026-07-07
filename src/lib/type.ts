import type { ECurrency, ELocaleCurrency } from "./enum"

export type FormatMoneyOptions = {
  currency?: ECurrency
  locale?: ELocaleCurrency
  showSymbol?: boolean
  minDecimals?: number | null
  maxDecimals?: number | null
}
