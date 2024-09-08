/* eslint-disable no-unused-vars */
import favs from "../../../lib/favs.js";
import { prisma } from '../../../lib/prisma'
import {getUserSession } from "../../../lib/session.ts";
import { connectToDB } from "../../../lib/connectDB.js";
import { NextRequest ,NextResponse} from "next/server"


export  async function POST(request) {
  try { const data = await request.json()
const session = await getUserSession()
console.log(session.email)
    const updateUser = await prisma.user.update({
        where: {
          email: session.email,
        },
        data: {
          prefrence: data,
        },
      })

    return NextResponse.json({ msg: "hi" }, { status: 200 });
  } catch (error) {
    console.log(error.message);
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}