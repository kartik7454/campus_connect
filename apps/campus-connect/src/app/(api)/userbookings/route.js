/* eslint-disable no-unused-vars */
import booking from "../../../lib/bookings.js";
import { prisma } from '../../../lib/prisma'
import {getUserSession } from "../../../lib/session.ts";
import { connectToDB } from "../../../lib/connectDB.js";
import { NextRequest ,NextResponse} from "next/server"


export  async function GET  (request) {
  try {
    const  session = await getUserSession()
     console.log(session)
   const event =await  booking.find( {email:session.email} )
 return NextResponse.json({ msg:event }, { status: 200 })
  
 

    
  } catch (error) {
    console.log(error.message);
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}