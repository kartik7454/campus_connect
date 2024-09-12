/* eslint-disable no-unused-vars */
import favs from "../../../../lib/favs.js";
import { connectToDB } from "../../../../lib/connectDB.js";
import { NextRequest ,NextResponse} from "next/server"
import { useParams } from 'next/navigation'

interface Props {
  params: {
id: string
    }
}


export  async function GET(request:NextRequest,Props:Props) {
  try { await connectToDB()
    const {params } = Props  
    const {id } = params
    
  
    const itemExists  =await favs.find({email:id})
    // console.log("hi")
    return NextResponse.json({ msg:itemExists }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: error }, { status: 400 });
  }
}