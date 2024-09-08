/* eslint-disable no-unused-vars */
import events from "../../../../lib/studentevents.js";
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
  try { await connectToDB()
    const {params } = Props  
    const {id } = params
    var objectId = new mongoose.Types.ObjectId(id)
   
    const itemExists  =await events.findOne({_id:objectId})
    // console.log("hi")
    return NextResponse.json({ msg:itemExists }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: error}, { status: 400 });
  }
}