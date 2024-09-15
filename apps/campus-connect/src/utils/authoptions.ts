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
      

      if(trigger==="update"){
        
        if(token.email){ const user1 = await prisma.user.findUnique({
        where: {
          email: token.email,
        },
      })
      token.name =user1?.name
      token.image =user1?.image
      token.type =user1?.type
      token.id = user1?.id
      token.prefrence = user1?.prefrence}
        
        
       
      }



      
      if(token.type){
        if(token.email){  const user1 = await prisma.user.findUnique({
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
      token.about = user1?.about
     }
        
        
      
    
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
              about:'',
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
      token.about=user1?.about
      }

      




      return token
    },
    async session({ session, token }) {
     
      if (token) {
       

       if (session.user ){  
   const session1 = session.user as Session;

        session1.id = token.id
        session1.name = token.name
        session1.email = token.email
        session1.image = token.image
        session1.type = token.type
        session1.about = token.about
        session1.followers = token.followers
        session1.prefrence = token.prefrence  }
       
      }
      console.log("session")
      console.log(session)

      return session
    }
  },
}
