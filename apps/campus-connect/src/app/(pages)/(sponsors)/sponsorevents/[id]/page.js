/* eslint-disable react/jsx-key */

"use client"

import React from 'react';
import { useState,useEffect } from "react"
import { useParams } from 'next/navigation'

export default function Home() {
    const [event, setevent] = useState("")


    const router = useParams()
    console.log("hiii")
    let id = router.id
    useEffect( ()=>{
    const fetchtodo  = async ()=>{
              
            const response = await fetch ('/get-ind-spon-evt/'+id)
            const json = await response.json()
            
            
   
            if(!response.ok){
                console.log(json.error)  
                
               }
            if(response.ok){

              setevent(json.msg[0])
            console.log(json.msg[0])
             
     
            }
            }
            fetchtodo()
            
            
            },[])
    return (
      <div>
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-black">{event.title}</h1>
        <h1 className="mb-4 text-xl font-semibold leading-none tracking-tight text-gray-900 md:text-xl lg:text-xl dark:text-black">{event.discription}</h1>
        <h1 className="mb-4 text-xl font-semibold leading-none tracking-tight text-gray-900 md:text-xl lg:text-xl dark:text-black">{event.location}</h1>

        <h1 className="mb-4 text-xl font-semibold leading-none tracking-tight text-gray-900 md:text-xl lg:text-xl dark:text-black">{event.category}</h1>
        <h1 className="mb-4 text-xl font-semibold leading-none tracking-tight text-gray-900 md:text-xl lg:text-xl dark:text-black">{event.fromdate}</h1>
        <h1 className="mb-4 text-xl font-semibold leading-none tracking-tight text-gray-900 md:text-xl lg:text-xl dark:text-black">{event.sttime}</h1>
        <h1 className="mb-4 text-xl font-semibold leading-none tracking-tight text-gray-900 md:text-xl lg:text-xl dark:text-black">{event.entime}</h1>

<div>
{event.offer?(event.offer.map((item)=>{return(<div>
    <h1>name</h1>
    <h1>{item.name}</h1>
    
    <h1>price</h1>
    <h1>{item.price}</h1><hr></hr>
    </div>)


    })):null}

    {event.faq?(event.faq.map((item)=>{return(<div>
    <h1>question</h1>
    <h1>{item.question}</h1>
    
    <h1>answer</h1>
    <h1>{item.answer}</h1><hr></hr>
    </div>)


    })):null}
  
</div>
      </div>
    );
  }

  