/* eslint-disable no-unused-vars */
import sponevents from "../../../lib/sponsorevents.js";
import { connectToDB } from "../../../lib/connectDB.js";
import {  NextResponse} from "next/server"

import { getUserSession  } from '../../../lib/session.ts'
export  async function POST(request) {
  try {
    await connectToDB();
    const session=await  getUserSession()
    const creator = session.email
    const data = await request.formData();

    const title = data.get('title');
    const discription = data.get('discription');
    const image = data.get('image');
    ;
    const fromdate = data.get('fromdate');
    ;
    const sttime = data.get('sttime');
    const location = data.get('location');
    const city = data.get('city');
    const entime = data.get('entime');
    const category = data.get('category');
    const rawFaq = data.get('faq');
    const faq = JSON.parse(rawFaq);
    const rawoffer = data.get('offer');
    const offer = JSON.parse(rawoffer);
    const event = await sponevents.create({title:title,discription:discription,image:image,fromdate:fromdate,
    sttime:sttime,location:location,entime:entime,category:category,faq:faq,offer:offer,creator:creator,city:city})

    return NextResponse.json({ msg: "hi" }, { status: 200 });
  } catch (error) {
    console.log(error.message);
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}