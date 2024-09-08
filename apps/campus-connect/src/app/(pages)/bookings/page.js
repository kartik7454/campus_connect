/* eslint-disable react/jsx-key */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
"use client"
import Link from "next/link"
import { useState,useEffect } from "react"
export default function Filterbar(props) {
    const [bookings , setbookings] = useState(false)
    useEffect( ()=>{
        const fetchtodo  = async ()=>{
         
                const response = await fetch ('/userbookings')
                const json = await response.json()
                
                
       
                if(!response.ok){
                    console.log(json.error)  
                    
                   }
                if(response.ok){
    
                  
                console.log(json.msg)
                 setbookings(json.msg)
         
                }
                }
                fetchtodo()
                
                
                },[])
    

    return (<div><h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-black text-center">bookings done by you</h1>
    <div className="">{bookings?(bookings.map((item)=>{return<div  className=""><Link href={"/studentevents/"+item.eventid}><h1 className="mb-4 text-lg font-semibold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-black text-center">{item.title}</h1></Link></div>})):null}
    
    
    
    </div></div>)
      
  }

  