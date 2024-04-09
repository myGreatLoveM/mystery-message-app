import { z } from 'zod'

export const usernameValidation = z
  .string()
  .min(4, 'username must be at least 4 characters long')
  .max(20, 'username should not exceed 20 characters')
  .regex(
    /^[a-zA-Z0-9_]+$/,
    'username should not contain any special characters'
  )

export const signUpSchema = z.object({
  username: usernameValidation,
  email: z.string().email({ message: 'invalid email address' }),
  password: z
    .string()
    .min(6, { message: 'password must be at least 6 characters' }),
})
