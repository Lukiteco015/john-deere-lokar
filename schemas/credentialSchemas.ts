import { z } from "zod";
import { userSchema } from "./userSchemas";
import { v4 as uuidv4 } from 'uuid';

export const credentialSchema = z.object({
    id: z.uuid().default(() => uuidv4()),
    password: z.string().min(8, 'A senha deve ter no mínimo 8 caracteres'),
    isRestricted: z.boolean().default(false),
})

export const updateCredentialSchema = z.object({
    password: z.string().min(8, 'A senha deve ter no mínimo 8 caracteres').optional(),
    isRestricted: z.boolean().optional(),
})