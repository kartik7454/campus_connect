/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */

"use client"

import React from 'react';
import Link from "next/link";
import Events from "../../../../components/events"
import { useState,useEffect } from "react"
import { useParams } from 'next/navigation'
import { getUserSession  } from '../../../../lib/session.ts'
export default function Home() {
    const [event, setevent] = useState([])

    
   
    useEffect( ()=>{
    const fetchtodo  = async ()=>{
              const session =await getUserSession()
            const response = await fetch ('/get-favs/'+session.email)
            const json = await response.json()
            
            
   
            if(!response.ok){
                console.log(json.error)  
                
               }
            if(response.ok){

              setevent(json.msg)
            console.log(json.msg)
             
     
            }
            }
            fetchtodo()
            
            
            },[])


         
    return (
      <div>
      <h1 className="mb-4 text-4xl font-extrabold capitalize leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-black text-center">your favs</h1>
    {event?(event.map((item)=>{
      
      return(<div className='inline'> <Link href={"/studentevents/"+item.item._id}><Events 
          id={item._id}
         title={item.item.title} 
discription={item.item.discription}
category={item.item.category}
price={item.item.price}
image={item.item.image}
fromdate={item.item.fromdate}
likes={item.item.likes}
         /></Link></div>)})):null}
      </div>
    );
  }

  