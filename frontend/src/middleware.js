import { NextRequest,NextResponse } from 'next/server';
import { cookies } from 'next/headers'

const protectedRoutes = ['/']
const publicRoutes = ['/login', '/signup']

export async function middleware(req) {
    
  const path = req.nextUrl.pathname

  const isProtectedRoute = protectedRoutes.includes(path)
  const isPublicRoute = publicRoutes.includes(path)

  const access_token = (await cookies()).get('access_token')?.value
  const userId = (await cookies()).get('userId')?.value

  if (isProtectedRoute && !userId) {
    return NextResponse.redirect(new URL('/login', req.nextUrl))
  }
 
  // // 5. Redirect to /dashboard if the user is authenticated
  if (isPublicRoute && userId ) {
    return NextResponse.redirect(new URL('/', req.nextUrl))
  }

  return NextResponse.next();
}
