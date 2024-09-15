/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */


"use client"
import Link from 'next/link'
import React from 'react';
import { useState,useEffect } from "react"
import { useParams,useRouter } from 'next/navigation'
import {session_new} from "../../../../../lib/session-new"
import { getUserSession  } from '../../../../../lib/session.ts'
export default function Home() {
  const router1 = useRouter()
    const [event, setevent] = useState()
    const [sponsor, setsponsor] = useState(false)
    const [visi , setvisi] = useState(false)
    const [booking , setbooking] = useState({
      email:"",
      name:""
    })
    const router = useParams()
    let id = router.studentid
    useEffect( ()=>{
    const fetchtodo  = async ()=>{
      console.log("id")
      const session = await session_new()
              console.log(id)
            const response = await fetch ('/get-ind-stu-evt/'+id)
            const json = await response.json()
            
            
   
            if(!response.ok){
                console.log(json.error)  
                
               }
            if(response.ok){
              setsponsor(session.type)
              setevent(json.msg)
            console.log(json.msg)
             
     
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
              const response = await fetch('/st-like-evt',{
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
            async function handelclick2(){
              const session =await getUserSession()
              
               console.log()
              
               let data = {userid:session.email,
                id:event._id,
                event:event
               }
                            const response = await fetch('/createfav',{
                                method:"POST",
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

                          async function handelclick3(){
                           
                            
                             console.log()
                            
                             let data = {email:booking.email,
                              name:booking.name,
                              eventid:event._id,
                              title:event.title
                             }
                                          const response = await fetch('/booking',{
                                              method:"POST",
                                              body :  JSON.stringify(data) //convert to json from object
                                              
                                          })
                                          const json = await response.json()
                                          if (!response.ok){
                                        console.log(json.error)
                                    
                                         
                                          }
                                          if (response.ok){
                                            router1.push("/submited/"+json.msg)
                                            console.log("hi")
                                          }
                                        }
    return (

      <div className='ml-16'>   

{visi?(<div className='w-96  bg-slate-300 fixed top-40 right-1/3 rounded-xl'><div className="grid gap-6 mb-6 md:grid-cols-1 px-10 pb-5">
  <h1 className='text-4xl font-extrabold text-center mt-10'>Details</h1>
  <div>
      <label htmlFor="first_name" className="block mb-2 text-medium font-bold text-gray-900 dark:text-black"> Name</label>
      <input type="text" onChange={(e)=>{booking.name=e.target.value}} id="first_name" className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-slate-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 "   required />
  </div>
  
  <div>
      <label htmlFor="last_name" className="block mb-2 text-medium font-bold text-gray-900 dark:text-black">Email</label>
      <input type="text" onChange={(e)=>{booking.email=e.target.value;}}   id="last_name" className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-slate-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 "   required />
  </div>
  <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={  () => {handelclick3()}}>Submit</button>
   
  <button className="text-black bg-blue-700 hover:bg-slate-200 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 border-2 border-black dark:bg-white dark:hover:bg-slate focus:outline-none dark:focus:ring-blue-100" onClick={  () => {setvisi(false)}}>Cancel</button>


  
</div></div>):null}
      
      {event?( <div>
         
     
     
      
      
      <h1 className="mb-4 text-xl font-semibold leading-none tracking-tight text-gray-900 md:text-xl lg:text-xl dark:text-black">{event.fromdate.slice(0,10) +" · "+event.sttime+"-"+event.entime}</h1>
      
        <h1 className="mb-4 text-6xl font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-6xl dark:text-black capitalize">{event.title}</h1>
        
        <h1 className="mb-4 text-xl font-semibold leading-none tracking-tight text-gray-900 md:text-xl lg:text-xl dark:text-black">{event.discription}</h1>
        <Link href={ "/creatorprofile/"+event.creator }><h1 className="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-2xl underline decoration-solid dark:text-black">{"Organized by- "+event.creator}</h1></Link>
        <h1 className="mb-4 text-xl font-bold leading-none tracking-tight text-gray-900 md:text-xl lg:text-xl dark:text-black">Location</h1>
        <h1 className="mb-4 text-lg font-semibold leading-none tracking-tight text-gray-900 md:text-xl lg:text-lg dark:text-black">{event.location+","+event.city}</h1>
       
        <h1 className="mb-4 text-xl font-bold leading-none tracking-tight text-gray-900 md:text-xl lg:text-xl dark:text-black">Price</h1>
        <h1 className="mb-4 text-xl font-semibold leading-none tracking-tight text-gray-900 md:text-xl lg:text-lg dark:text-black">{ "$"+event.price}</h1>

        <h1 className="mb-4 text-xl font-bold leading-none tracking-tight text-gray-900 md:text-xl lg:text-xl dark:text-black">Category</h1>
        <h1 className="mb-4 text-xl font-semibold leading-none tracking-tight text-gray-900 md:text-xl lg:text-lg dark:text-black">{event.category}</h1>
       
        
        

<div>
<div>{sponsor =="sponsor"?(<div>
<h1 className="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-6xl lg:text-6xl underline decoration-solid dark:text-black capitalize text-center">pitch tech</h1>

<h1 className="mb-4 text-lg font-bold leading-none tracking-tight text-gray-900 md:text-xl lg:text-lg dark:text-black text-center">{event.pitchtech}</h1>
<hr></hr>
</div>) :null}</div>

 <div> {sponsor =="student"?(<div><h1 className="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-6xl lg:text-6xl underline decoration-solid dark:text-black capitalize text-center"> faq</h1>

    {event.studentfaq?(event.studentfaq.map((item)=>{return(<div>
    <h1 className="mb-4 text-xl font-bold leading-none tracking-tight text-gray-900 md:text-xl lg:text-xl dark:text-black capitalize">question</h1>
    <h1 className="mb-4 text-lg font-semibold leading-none tracking-tight text-gray-900 md:text-xl lg:text-lg dark:text-black">{item.question}</h1>
    
    <h1 className="mb-4 text-xl font-bold leading-none tracking-tight text-gray-900 md:text-xl lg:text-xl dark:text-black capitalize">answer</h1>
    <h1 className="mb-4 text-lg font-semibold leading-none tracking-tight text-gray-900 md:text-xl lg:text-lg dark:text-black">{item.answer}</h1><hr></hr>
    </div>)
    


    })):null}</div>):null}  </div>


   <div>{sponsor =="sponsor"?(<div><h1 className="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-4xl underline decoration-solid dark:text-black capitalize text-center"> faq</h1>

    {event.sponfaq?(event.sponfaq.map((item)=>{return(<div>
    <h1 className="mb-4 text-xl font-bold leading-none tracking-tight text-gray-900 md:text-xl lg:text-xl dark:text-black capitalize">question</h1>
    <h1 className="mb-4 text-xl font-semibold leading-none tracking-tight text-gray-900 md:text-xl lg:text-lg dark:text-black">{item.question}</h1>
    
    <h1 className="mb-4 text-xl font-bold leading-none tracking-tight text-gray-900 md:text-xl lg:text-xl dark:text-black capitalize">answer</h1>
    <h1 className="mb-4 text-lg font-semibold leading-none tracking-tight text-gray-900 md:text-xl lg:text-lg dark:text-black">{item.answer}</h1><hr></hr>
    </div>)
    


    })):null}</div>) :null}</div>
    <div>{sponsor =="sponsor"?(<div><h1 className="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-4xl underline decoration-solid dark:text-black capitalize text-center">Offers</h1>

{event.offer?(event.offer.map((item)=>{return(<div>
<h1 className="mb-4 text-xl font-bold leading-none tracking-tight text-gray-900 md:text-xl lg:text-xl dark:text-black capitalize">name</h1>
<h1 className="mb-4 text-lg font-semibold leading-none tracking-tight text-gray-900 md:text-xl lg:text-lg dark:text-black">{item.name}</h1>

<h1 className="mb-4 text-xl font-bold leading-none tracking-tight text-gray-900 md:text-xl lg:text-xl dark:text-black capitalize">price</h1>
<h1 className="mb-4 text-lg font-semibold leading-none tracking-tight text-gray-900 md:text-xl lg:text-lg dark:text-black">{item.price}</h1><hr></hr>
</div>)



})):null}</div>) :null}</div>

 
 <button onClick={()=>{handelclick2()}} className='text-white bg-blue-700 inline hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 block dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'>Favourite</button>
 <button onClick={()=>{handelclick()}} className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'>Like</button>
 <h1 className="inline">{event.likes?event.likes.length:0}</h1>
     
     <div>{sponsor =="student"?(<button  onClick={()=>{setvisi(true)}} className='text-white block w-96 mb-20 text bg-green-600 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'>book/pay</button>):null}</div>
     
      
     
</div>
      </div>):null}

      

      </div>
    );
  }

  
