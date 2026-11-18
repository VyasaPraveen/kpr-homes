import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatNumber(num: number): string {
  return new Intl.NumberFormat("en-IN").format(num);
}

/**
 * Sanitize user input to prevent XSS attacks.
 * Escapes HTML special characters.
 */
export function sanitizeInput(input: string): string {
  const map: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#x27;",
    "/": "&#x2F;",
    "`": "&#96;",
  };
  return input.replace(/[&<>"'/`]/g, (char) => map[char]);
}

/**
 * Validate email format
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

/**
 * Validate Indian phone number
 */
export function isValidPhone(phone: string): boolean {
  const phoneRegex = /^[+]?[0-9\s-]{10,15}$/;
  return phoneRegex.test(phone.replace(/\s/g, ""));
}

/**
 * Rate limiter for form submissions (client-side)
 */
const submitTimestamps: Map<string, number[]> = new Map();
export function isRateLimited(formId: string, maxSubmits = 3, windowMs = 60000): boolean {
  const now = Date.now();
  const timestamps = submitTimestamps.get(formId) || [];
  const recent = timestamps.filter((t) => now - t < windowMs);
  if (recent.length >= maxSubmits) return true;
  recent.push(now);
  submitTimestamps.set(formId, recent);
  return false;
}
