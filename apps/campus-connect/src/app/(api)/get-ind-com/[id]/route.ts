/* eslint-disable no-unused-vars */
import community from "../../../../lib/community.js";
import { connectToDB } from "../../../../lib/connectDB.js";
import { NextRequest ,NextResponse} from "next/server"
import { useParams } from 'next/navigation'
import mongoose from 'mongoose';
interface Props {
  params: {
id: string
    }
}


export  async function GET(request:NextRequest,Props:Props) {
  try { await connectToDB()
    const {params } = Props  
    const {id } = params
    const objectId = new mongoose.Types.ObjectId(id)
   console.log(id)
    const itemExists  =await community.find({_id:objectId})
    // console.log("hi")
    return NextResponse.json({ msg:itemExists }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: error }, { status: 400 });
  }
}