/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-key */
"use client"
import Events from "./events"
import { useState,useEffect } from "react"

import Link from "next/link";

export default function EventsContainer(props) {
  const [filter, setfilter] = useState(props.filteropt)
  const [events, setevents] = useState(null)
  useEffect( ()=>{
    const fetchtodo  = async ()=>{
              
            const response = await fetch ('/getcommunity')
            const json = await response.json()
            setfilter(props.filteropt)
            
    console.log(filter)
            if(!response.ok){
                console.log(json.error)  
                
               }
            if(response.ok){

              setevents(json.msg)
            
       
             
     
            }
            }
            fetchtodo()
            
            
            })
    return (
      <div className="bg-slate-100 absolute right-20 top-24  w-7/12" >
        
         {events?(events.filter((item)=>{
          let arr =filter

          if(arr[1] =="all"){return item} 
          return (arr[1] ==item.category)

         }).filter((item)=>{
          let arr =filter

          if(arr[2] =="all"){return item} 
          return (arr[2] ==item.location)
         }).filter((item)=>{
          let arr =filter

          if(arr[3] =="all"){return item} 
          return (   Number(arr[3]) >= Number(item.price))
         }).sort((a, b) =>{ 
          let arr =filter
          if(arr[4] =="all"){return 0} 

                const alength = a.likes.length||0
                const blength = b.likes.length||0
                return blength - alength} ).map((item)=>{return(<div className="inline"> <Link href={"/communities/"+item._id}><Events 
         title={item.title} 
discription={item.discription}
category={item.category}
price={item.price}
image={item.image}
fromdate={item.fromdate}
likes={item.likes}
         /></Link>  </div>)
         
         
         })):null}
             
        </div>
        
      
    );
  }

  