"use server";

import { customerData } from "@/lib/utils";
import { z } from "zod";

export async function sendMessage(formData: z.infer<typeof customerData>) {
  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: process.env.EMAIL_ACCESS_KEY,
        ...formData,
      }),
    });

    const result = await response.json();
    if (!result.success) throw new Error(result.message);
    return result;
  } catch (error: any) {
    console.log(error);
  }
}
