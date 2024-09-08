import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer'
import { NextRequest } from "next/server";
import { prisma } from '../../../lib/prisma'
import { getUserSession  } from '../../../lib/session'

export async function POST(request: NextRequest) {
    try {
    //     const body = await request.json()
                
    // console.log("hii")
    // console.log(body)
    const session= await  getUserSession()
    console.log(session)
    const user = await prisma.user.findUnique({
        where: {
          email: session.email,
        },
      })
      
  console.log(user?.followers)
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
            user: 'kb848067@gmail.com',
                pass: process.env.NEXT_PUBLIC_PASSWORD
            }
        })

         const maillist = user?.followers
        const mailOption = {
            from: '',
            
            to:maillist ,
            subject: "new order ",
            html: "<p>hbh</p>"
        }

      await transporter.sendMail(mailOption)

        return NextResponse.json({ message: "Email Sent Successfully" }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 400 })
    }
}