
import { getToken } from 'next-auth/jwt'
import { withAuth } from 'next-auth/middleware'
import { NextResponse } from 'next/server'


import type { NextRequest } from 'next/server'





export default withAuth(
 
  async function middleware(req: NextRequest) {
   
    const isAuth = await getToken({ req })
    const pathname = req.nextUrl.pathname
   
   
    
    const isLoginPage = pathname.startsWith('/login')

    const sensitiveRoutes = ['/home','/menu','/dashboard','/cart']
    const isAccessingSensitiveRoute = sensitiveRoutes.some((route) =>
      pathname.startsWith(route)
    )

    if (isLoginPage) {
      if (isAuth) {
        return NextResponse.redirect(new URL('/home', req.url))
      }

      return NextResponse.next()
    }

    if (!isAuth && isAccessingSensitiveRoute) {
      return NextResponse.redirect(new URL('/login', req.url))
    }

    if (pathname === '/') {
       console.log(isAuth?.type) 
      return NextResponse.redirect(new URL('/home', req.url))
    }
    
    if (isAuth?.type=="not" && isAccessingSensitiveRoute) {
  
        return NextResponse.redirect(new URL('/chooseprofiletype', req.url))
      }
      if (isAuth?.type=="student" && pathname === '/chooseprofiletype') {
        
              return NextResponse.redirect(new URL('/', req.url))
            }
  },
  {
    callbacks: {
      async authorized() {
        return true
      },
    },
  }
)

export const config = {
  matchter: ['/home', '/login' ],
}