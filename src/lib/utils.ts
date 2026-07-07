import { parsePhoneNumberWithError } from "libphonenumber-js"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import type { FormatMoneyOptions } from "./type"
import { ECurrency, ELocaleCurrency } from "./enum"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const formatPhoneNumber = (phone: string, country?: string): string => {
  try {
    const phoneNumber = parsePhoneNumberWithError(phone, country as any)

    if (!phoneNumber || !phoneNumber.isValid()) {
      return "Invalid phone number"
    }

    // Format theo kiểu quốc tế (có +84)
    return phoneNumber.formatInternational()

    // Hoặc format theo kiểu quốc gia (không +)
    // return phoneNumber.formatNational();
  } catch (error) {
    return "Invalid phone number"
  }
}

export const formatMoney = (amount: number, options: FormatMoneyOptions = {}) => {
  const {
    currency = ECurrency.USD,
    locale = ELocaleCurrency.US,
    showSymbol = true,
    minDecimals = null, // Cho phép override
    maxDecimals = null,
  } = options

  if (typeof amount !== "number" || isNaN(amount)) {
    return "0 ₫"
  }

  // Tự động quyết định số chữ số thập phân
  let minimumFractionDigits = minDecimals !== null ? minDecimals : currency === ECurrency.VND ? 0 : 2

  let maximumFractionDigits = maxDecimals !== null ? maxDecimals : currency === ECurrency.VND ? 2 : 2 // Cho VND tối đa 2 chữ số

  // Nếu số có phần thập phân thì hiển thị ít nhất 2 chữ số (rất hữu ích)
  if (minDecimals === null && Math.abs(amount) % 1 !== 0) {
    minimumFractionDigits = 1
    maximumFractionDigits = 2
  }

  const formatter = new Intl.NumberFormat(locale, {
    style: showSymbol ? "currency" : "decimal",
    currency: currency,
    minimumFractionDigits,
    maximumFractionDigits,
  })

  return formatter.format(amount)
}
