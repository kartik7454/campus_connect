
"use server"
import { prisma } from './prisma.ts'
import {getUserSession } from "./session.ts";


export async function session_new() {
 const session = await getUserSession()
 if(session){const user = await prisma.user.findUnique({
        where: {
          email: session.email,
        },
      })

    return user}
    
<<<<<<< HEAD
  }
=======
  }
>>>>>>> c125c0097f62ecaafae83465fb183a50276055b3
