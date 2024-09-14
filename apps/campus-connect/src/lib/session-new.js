/* eslint-disable no-unused-vars */
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
    
  }
