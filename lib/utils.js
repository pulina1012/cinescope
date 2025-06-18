import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

//getting 100 count of years from 2025 to back
export const getYears = Array.from({ length: 100 }, (_, i) => 2025 - i);
