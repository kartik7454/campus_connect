/* eslint-disable no-unused-vars */


import nodemailer from 'nodemailer'
import events from "../../../lib/studentevents.js";
import { connectToDB } from "../../../lib/connectDB.js";
import {NextResponse} from "next/server"
import { getUserSession  } from '../../../lib/session.ts'

export  async function POST(request) {
  try {
    await connectToDB();
//     const session=await  getUserSession()
// const creator = session.email
// console.log(session)
    const data = await request.formData();
console.log(data)
    const title = data.get('title');
    const discription = data.get('discription');
    const image = data.get('image');
    const price = data.get('price');
    const fromdate = data.get('fromdate');
//     ;
    const sttime = data.get('sttime');
    const location = data.get('location');
    const city = data.get('city');
    const entime = data.get('entime');
    const category = data.get('category');
    const subcategory = data.get('subcategory');
    const rawFaq = data.get('studentfaq');
    const studentfaq = JSON.parse(rawFaq);

    const rawsponFaq = data.get('sponfaq');
    const sponfaq = JSON.parse(rawsponFaq);

    const rawoffer = data.get('offer');
    const offer = JSON.parse(rawoffer);

    const isopentosponsor = data.get("isopentosponsor");
 const pitchtech = data.get("pitchtech");
    const event = await events.create({title:title,discription:discription,image:image,price:price,fromdate:fromdate,isopentosponsor:isopentosponsor,pitchtech:pitchtech,
    sttime:sttime,location:location,entime:entime,category:category,studentfaq:studentfaq,sponfaq:sponfaq,offer:offer,city:city,subcategory:subcategory})

    return NextResponse.json({ msg: "hi" }, { status: 200 });
  } catch (error) {
    console.log(error.message);
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}