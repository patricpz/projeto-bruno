import { z } from 'zod'

export const userSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  createdAt: z.string()
})

export type User = z.infer<typeof userSchema>

export const userSessionSchema = userSchema.merge(
  z.object({
    accessToken: z.string()
  })
)

export type UserSession = z.infer<typeof userSessionSchema>

export const userJWTSchema = z.object({
  sub: z.string(),
  name: z.string(),
  email: z.string(),
  createdAt: z.string(),
  exp: z.number()
})

export type UserJWT = z.infer<typeof userJWTSchema>
