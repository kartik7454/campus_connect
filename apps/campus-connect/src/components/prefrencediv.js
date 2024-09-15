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

       
{array.map((item)=>{return(<div className="inline">

  <input onClick={(e)=>{
    if(e.target.checked){let arr =  pref
      
      
      
      console.log(e.target.value)
    
    let  alo =  arr.push(e.target.value)
    console.log(arr)
    setpref(arr)}
    else{let arr =  pref
    const alo = arr.filter((item)=>{return item  !==e.target.value})
    console.log(alo)
    setpref(alo)
    }
    
  }} type="checkbox" class="px-5 py-3 mx-5 text-base font-medium text-center text-white  bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" value={item}></input>
  <h1 className="inline font-bold text-xl capitalize">{item}</h1>
</div>)})}
       

       <button className="px-5 py-3 mx-5 text-base font-medium text-center mt-10 block text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={()=>{handelclick()}   }>submit</button>
        </div>
        
      
    );
  }

  
