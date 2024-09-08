/* eslint-disable no-unused-vars */
import event from "../../../../lib/studentevents.js";
import { prisma } from '../../../../lib/prisma'
import { connectToDB } from "../../../../lib/connectDB.js";
import { NextRequest ,NextResponse} from "next/server"
import { useParams } from 'next/navigation'
var mongoose = require('mongoose');
interface Props {
  params: {
id: string
    }
}


export  async function GET(request:NextRequest,Props:Props) {
  try { 
    const {params } = Props  
    const {id } = params
    console.log(id)
    const user = await prisma.user.findUnique({
    where: {
      email: id,
    },
  })



  
   
    // console.log("hi")
    return NextResponse.json({ msg:user }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: error }, { status: 400 });
  }
}