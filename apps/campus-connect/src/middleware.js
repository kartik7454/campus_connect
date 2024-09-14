
import { getToken } from 'next-auth/jwt'
import { withAuth } from 'next-auth/middleware'
import { NextResponse } from 'next/server'








export default withAuth(
 
  async function middleware(req) {
   
    const isAuth = await getToken({ req })
    console.log(isAuth)
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

    // if (!isAuth && isAccessingSensitiveRoute) {
    //   return NextResponse.redirect(new URL('/login', req.url))
    // }

    if (pathname === '/') {
       console.log(isAuth?.type) 
      return NextResponse.redirect(new URL('/home', req.url))
    }
    
    if (isAccessingSensitiveRoute) {
  console.log(isAuth)
        return NextResponse.redirect(new URL('/chooseprofiletype', req.url))
      }

      if (isAuth?.prefrence.length < 1 && isAuth?.type =="student" &&isAccessingSensitiveRoute) {
  
        return NextResponse.redirect(new URL('/prefrence', req.url))
      }
      if (isAuth?.prefrence.length >= 1  && pathname === '/prefrence') {
  
        return NextResponse.redirect(new URL('/', req.url))
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
