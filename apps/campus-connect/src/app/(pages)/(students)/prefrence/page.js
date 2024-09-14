
"use client"
import Prefrencediv from "../../../../components/prefrencediv.js";
import { SessionProvider } from "next-auth/react"


export default function Page(session) {
  return (
    <div>
      <SessionProvider session ={session}>
        <Prefrencediv />
     </SessionProvider>
    </div>
  );
}


