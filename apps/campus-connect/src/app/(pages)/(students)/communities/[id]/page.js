/* eslint-disable react/jsx-key */

"use client"

import React from 'react';
import { useState,useEffect } from "react"
import { useParams } from 'next/navigation'
import { getUserSession  } from '../../../../../lib/session.ts'
export default function Home() {
    const [event, setevent] = useState("")


    const router = useParams()
    console.log("hiii")
    let id = router.id
    useEffect( ()=>{
    const fetchtodo  = async ()=>{
              
            const response = await fetch ('/get-ind-com/'+id)
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
            async function handelclick(){
              const session =await getUserSession()
              
               console.log()
              
               let data = {userid:session.id,
                eventid:event._id
               }
                            const response = await fetch('/com-like',{
                                method:"PATCH",
                                body :  JSON.stringify(data) //convert to json from object
                                
                            })
                            const json = await response.json()
                            if (!response.ok){
                          console.log(json.error)
                      
                           
                            }
                            if (response.ok){
                              console.log("hi")
                            }
                          }
    return (
      <div>
      <button onClick={()=>{handelclick()}} className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'>like</button>
      <h1 className='inline'>{event.likes ?event.likes.length:0}</h1>
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-black">{event.title}</h1>
        <h1 className="mb-4 text-xl font-semibold leading-none tracking-tight text-gray-900 md:text-xl lg:text-xl dark:text-black">{event.discription}</h1>


        <h1 className="mb-4 text-xl font-semibold leading-none tracking-tight text-gray-900 md:text-xl lg:text-xl dark:text-black">{event.category}</h1>
   

<div>
{event.links?(event.links.map((item)=>{return(<div>
    <h1>name</h1>
    <h1>{item.name}</h1>
    
    <h1>url</h1>
    <h1>{item.url}</h1><hr></hr>
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

  