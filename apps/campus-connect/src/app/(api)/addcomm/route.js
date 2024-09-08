/* eslint-disable no-unused-vars */
import community from "../../../lib/community.js";
import { connectToDB } from "../../../lib/connectDB.js";
import {NextResponse} from "next/server"
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
   
    const category = data.get('category');
    const rawlinks = data.get('links');
    const links = JSON.parse(rawlinks);
   
    const event = await community.create({title:title,discription:discription,image:image,category:category,links:links,creator:creator})

    return NextResponse.json({ msg: "hi" }, { status: 200 });
  } catch (error) {
    console.log(error.message);
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}