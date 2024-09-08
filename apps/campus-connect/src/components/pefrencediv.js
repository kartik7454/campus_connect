/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-key */
"use client"
import { getUserSession } from '../lib/session.ts'

import { useState,useEffect } from "react"
import Link from "next/link";
import { session_new } from '../lib/session-new'
import  Events  from '../components/events'
export default function Prefrence(request) {
  
  const [events, setevents] = useState(null)
  const [user, setuser] = useState(null)
  useEffect( ()=>{
    const fetchtodo  = async ()=>{
       const user = await session_new()
      
            const response = await fetch ('/getstudentevents')
            const json = await response.json()
            
            
    
            if(!response.ok){
                console.log(json.error)  
                
               }
            if(response.ok){
setuser(user)
console.log(user.prefrence[0])
              setevents(json.msg)
            
             
     
            }
            }
            fetchtodo()
            
            
            },[])
    return (<div><h1 className=''> most popular events  in {user?user.prefrence[0]:null}</h1>
    <div className="bg-slate-200 w-full overflow-x-hidden " >
        
        {   events?(<div >{events.filter((item)=>{return item.category ==user.prefrence[0] }).sort((a, b) =>{ 
          

                const alength = a.likes.length||0
                const blength = b.likes.length||0
                return blength - alength} ).map((item)=>{return<div className='inline'><Link href={"/studentevents/"+item._id}><Events 
          id={item._id}
         title={item.title} 
discription={item.discription}
category={item.category}
price={item.price}
image={item.image}
fromdate={item.fromdate}
likes={item.likes}
         /></Link></div>})}</div>):null }
       
        </div></div>
      
        
      
    );
  }

  