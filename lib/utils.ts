import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Formats a time string (HH:mm:ss) into a local 12-hour format with AM/PM.
 */
export function formatAuctionTime(timeStr: string, locale: string) {
  if (!timeStr) return "";

  // ERPNext time format is usually HH:mm:ss
  const [hoursStr, minutesStr] = timeStr.split(':');
  if (!hoursStr || !minutesStr) return timeStr;

  let hours = parseInt(hoursStr, 10);
  const minutes = minutesStr.padStart(2, '0');

  const isPM = hours >= 12;
  const hours12 = hours % 12 || 12;

  if (locale === 'ar') {
    const amPm = isPM ? "مساءً" : "صباحاً";
    return `${hours12}:${minutes} ${amPm}`;
  } else {
    const amPm = isPM ? "PM" : "AM";
    return `${hours12}:${minutes} ${amPm}`;
  }
}
