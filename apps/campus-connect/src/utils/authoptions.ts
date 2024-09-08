import { NextAuthOptions } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import { prisma } from '../lib/prisma'
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID!
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET!

 export const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt',
  },

  providers: [
    GoogleProvider({
      clientId: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    
    
    async jwt({ token, profile,user ,trigger}) {
      //this will triger while session
      

      if(trigger==="update"){const user1 = await prisma.user.findUnique({
        where: {
          email: token.email,
        },
      })
      token.name =user1?.name
      token.image =user1?.image
      token.type =user1?.type
      token.id = user1?.id
      token.prefrence = user1?.prefrence
      }



      
      if(token.type){const user1 = await prisma.user.findUnique({
        where: {
          email: token.email,
        },
      })
      token.name =user1?.name
      token.image =user1?.image
      token.type =user1?.type
      token.followers =user1?.followers
      token.prefrence =user1?.prefrence
      token.id = user1?.id
     console.log("token")
   console.log(token)
    
    }
// this will activate when login
      if (profile) {
       
       
        
        
         
          const user1 =await prisma.user.upsert({
            where: {
              email: profile.email,
            },
            create: {
              email: profile.email,
              name: profile.name,
              image:user.image,
              type:'not',
              followers:[],
              prefrence:[]
            },
            update: {
              name: profile.name,
             
            },
          })
          
        
        token.name =user1?.name

        token.image =user1?.image
        
        token.id = user1?.id
        token.type=user1?.type
        token.followers=user1?.followers
      token.prefrence=user1?.prefrence
       
      }

      




      return token
    },
    async session({ session, token }) {
     
      if (token) {
       // set value of session == jwt
        session.user.id = token.id
        session.user.name = token.name
        session.user.email = token.email
        session.user.image = token.image
        session.user.type = token.type
        session.user.followers = token.followers
        session.user.prefrence = token.prefrence  
      }
      console.log("session")
      console.log(session)

      return session
    }
  },
}