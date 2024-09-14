
"use client"
import Accounttypcon  from "../../../components/accounttypecomponent.js";
import { SessionProvider } from "next-auth/react"


export default function Page(session) {
  return (
    <div>
      <SessionProvider session ={session}>
        <Accounttypcon />
    </SessionProvider>
      
     
    </div>
  );
}


