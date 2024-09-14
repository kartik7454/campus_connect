"use server"

import { User, getServerSession } from 'next-auth'

export const session = async ({ session, token }: any) => {
  session.user.id = token.id
  return session
}

export const getUserSession = async (): Promise<User> => {
  const authUserSession = await getServerSession({
    callbacks: {
      session,
    },
  })
<<<<<<< HEAD
//  if (!authUserSession) throw new Error('unauthorized')
=======
 // if (!authUserSession) throw new Error('unauthorized')
>>>>>>> c125c0097f62ecaafae83465fb183a50276055b3
  return authUserSession?.user
}
