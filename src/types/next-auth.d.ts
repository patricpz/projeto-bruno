import { Role } from '@/schemas/role'
import { UserSession } from '@/schemas/user'
import NextAuth, { DefaultSession } from 'next-auth'
import { DefaultJWT } from 'next-auth/jwt'

declare module 'next-auth' {
  interface Session {
    user: UserSession
    accessToken: string
  }
}

declare module 'next-auth/jwt' {
  interface JWT extends DefaultJWT {
    user: UserSession
    accessToken: string
  }
}
