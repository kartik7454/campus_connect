/* eslint-disable no-unused-vars */
import events from "../../../lib/studentevents.js";
import { prisma } from '../../../lib/prisma.ts'
import {getUserSession } from "../../../lib/session.ts";
import { connectToDB } from "../../../lib/connectDB.js";
import { NextRequest ,NextResponse} from "next/server"


export  async function GET(request) {
  try {
    const session = await  getUserSession()
    
     
 

    return NextResponse.json({ msg: session }, { status: 200 });
  } catch (error) {
    console.log(error.message);
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}