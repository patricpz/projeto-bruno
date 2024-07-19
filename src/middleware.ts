import { NextRequest, NextResponse } from 'next/server'
import { getUrl } from './lib/get-url'

export function middleware(request: NextRequest) {
  const token = request.cookies.get('next-auth.session-token')

  const pathname = request.nextUrl.pathname

  const publicRoutes = ['/signIn', '/signUp']
  if (publicRoutes.includes(pathname) && token) {
    return NextResponse.redirect(new URL(getUrl('/app')))
  }

  const protectedRoutes = ['/registerOrganization']
  if (
    (protectedRoutes.includes(pathname) || pathname.includes('/app')) &&
    !token
  ) {
    return NextResponse.redirect(new URL(getUrl('/signIn')))
  }
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
}
