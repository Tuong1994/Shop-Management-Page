import { parsePhoneNumberWithError } from 'libphonenumber-js';
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const formatPhoneNumber = (phone: string, country?: string): string => {
  try {
    const phoneNumber = parsePhoneNumberWithError(phone, country as any);

    if (!phoneNumber || !phoneNumber.isValid()) {
      return "Invalid phone number";
    }

    // Format theo kiểu quốc tế (có +84)
    return phoneNumber.formatInternational();

    // Hoặc format theo kiểu quốc gia (không +)
    // return phoneNumber.formatNational();
  } catch (error) {
    return "Invalid phone number";
  }
};
