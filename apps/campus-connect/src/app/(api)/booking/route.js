/* eslint-disable no-unused-vars */
import booking from "../../../lib/bookings.js";
import { prisma } from '../../../lib/prisma'
import {getUserSession } from "../../../lib/session.ts";
import { connectToDB } from "../../../lib/connectDB.js";
import { NextRequest ,NextResponse} from "next/server"


export  async function POST(request) {
  try {const data = await request.json();
   
   const event =await  booking.findOne( {email:data.email,eventid:data.eventid} )
 console.log("hiii")
 console.log(data)
  if (!event){
    const  sucess= await booking.create({email:data.email,eventid:data.eventid,name:data.name,title:data.title})
    return NextResponse.json({ msg:sucess._id }, { status: 200 });
  } 
 
  return NextResponse.json({ msg:"hi" }, { status: 200 });
    
  } catch (error) {
    console.log(error.message);
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}