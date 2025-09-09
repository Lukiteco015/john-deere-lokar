import { z } from "zod";
import { v4 as uuidv4 } from 'uuid';

export const userRole = z.enum(['USER', 'ADMIN']);

export const userSchema = z.object({
    id: z.uuid().default(() => uuidv4()),
    user: z.string().nullable(),
    email: z.email('Formato de e-mail inválido'),
    role: userRole.default('USER'),
})

export type User = z.infer<typeof userSchema>;
export type UserRole = z.infer<typeof userRole>;