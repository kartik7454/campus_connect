/* eslint-disable no-unused-vars */
import community from "../../../lib/community.js";
import { prisma } from '../../../lib/prisma'
import {getUserSession } from "../../../lib/session.ts";
import { connectToDB } from "../../../lib/connectDB.js";
import { NextRequest ,NextResponse} from "next/server"


export  async function PATCH(request) {
  try {const data = await request.json();
     const event =await  community.findById(data.eventid)
 if (!event.likes.includes(data.userid)){
    await community.findByIdAndUpdate(data.eventid,{$push:{likes:data.userid}})} 
 

    return NextResponse.json({ msg: "hi" }, { status: 200 });
  } catch (error) {
    console.log(error.message);
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}