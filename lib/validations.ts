import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2).max(100),
  phone: z.string().min(6).max(30),
  message: z.string().min(5).max(2000)
});

export type ContactPayload = z.infer<typeof contactSchema>;
