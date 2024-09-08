/* eslint-disable no-unused-vars */
import events from "../../../lib/studentevents.js";
import { prisma } from '../../../lib/prisma'
import {getUserSession } from "../../../lib/session.ts";
import { connectToDB } from "../../../lib/connectDB.js";
import { NextRequest ,NextResponse} from "next/server"
export  async function POST(request) {
  try {const data = await request.text();
    const session = await   getUserSession()
console.log(data)
const updateUser = await prisma.user.update({
            where: {
              email:session.email,
            },
            data: {
              type: data ,
            },
          })  

    return NextResponse.json({ msg: "hi" }, { status: 200 });
  } catch (error) {
    console.log(error.message);
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}