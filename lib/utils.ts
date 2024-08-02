import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { z } from "zod";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const customerData = z.object({
  firstName: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  lastName: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email({ message: "Please put a valid email address" }),
  phone: z.string().optional(),
  service: z.string({ required_error: "Please select a service" }),
  description: z.string().min(10, {
    message: "Your message was too short, must be more than 10 characters",
  }),
});
