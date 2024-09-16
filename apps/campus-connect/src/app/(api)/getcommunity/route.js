import community from "../../../lib/community.js";
import { connectToDB } from "../../../lib/connectDB.js";
import { NextRequest ,NextResponse} from "next/server"

export const dynamic = 'force-dynamic';
export  async function GET(request) {
  try {
    await connectToDB();
    const itemExists  =await community.find({})
    console.log("hi")
    return NextResponse.json({ msg: itemExists }, { status: 200 });
  } catch (error) {
    console.log(error.message);
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}