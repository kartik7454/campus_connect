/* eslint-disable no-unused-vars */
import favs from "../../../lib/favs.js";
import { prisma } from '../../../lib/prisma'
import {getUserSession } from "../../../lib/session.ts";
import { connectToDB } from "../../../lib/connectDB.js";
import { NextRequest ,NextResponse} from "next/server"


export  async function POST(request) {
  try {const data = await request.json();
    
console.log(data)
    const {_id,title,
      discription,image,
      price,location,fromdate,likes,sttime,entime,category,faq,creator

    }=data.event


const dataitem={
  id:_id,
  title:title,
  discription:discription,
  image:image,
  price:price,
  location:location,
  fromdate:fromdate,
  likes:likes,
  creator:creator,
  sttime:sttime,
  entime:entime,
  category:category,
  faq:faq

}
// console.log(dataitem)

const alo ="item.id"

    const event1 =await  favs.findOne({email:data.userid,id:data.id})
   console.log(event1)
   if(!event1){
      const event =await  favs.create({email:data.userid,item:dataitem,id:data.id})
    }
     
 
 

    return NextResponse.json({ msg: "hi" }, { status: 200 });
  } catch (error) {
    console.log(error.message);
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}