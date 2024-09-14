/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-key */
"use client"

import { useState,useEffect } from "react"
import Link from "next/link";
import { useSession } from "next-auth/react"

export default function Prefrencediv(props) {
const [pref, setpref] = useState([])
let array =['tech', 'business','art',"sports"]  

const {update}=useSession()
 async function  handelclick(){
    
  const response1 = await fetch('/setprefrence',{
    method:"POST",
    body :  JSON.stringify(pref) //convert to json from object
    
})
   
await update({ prefrence: pref })

    if(response1.ok){window.location.href="/home"}
 }
    return (
      <div  >

       
{array.map((item)=>{return(<div>

  <button onClick={(e)=>{
    console.log(e.target.value)
    let arr =  pref
    let  alo =  arr.push(e.target.value)
    console.log(arr)
    setpref(arr)
  }} type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" value={item}>{item}</button>
</div>)})}
       

       <button onClick={()=>{handelclick()}   }>submit</button>
        </div>
        
      
    );
  }

  
