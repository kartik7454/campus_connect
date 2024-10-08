/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */


"use client"
import Link from 'next/link'
import React from 'react';
import { useState,useEffect } from "react"
import { useParams,useRouter } from 'next/navigation'
import { getUserSession  } from '../../../../lib/session.ts'
export default function Home() {
  const router1 = useRouter()
    const [event, setevent] = useState()
    const [com , setcom] = useState()
    const [user , setuser] = useState()
    
    const router = useParams()
    let id = router.id
    useEffect( ()=>{
    const fetchtodo  = async ()=>{
      console.log("id")
              console.log(decodeURIComponent(id))
            const response = await fetch ('/my-events/'+decodeURIComponent(id))
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

            useEffect( ()=>{
                const fetchtodo  = async ()=>{
                  console.log("id")
                          console.log(decodeURIComponent(id))
                        const response = await fetch ('/getuserinfo/'+decodeURIComponent(id))
                        const json = await response.json()
                        
                        
               
                        if(!response.ok){
                            console.log(json.error)  
                            
                           }
                        if(response.ok){
            
                            setuser(json.msg)
                        console.log(json.msg)
                         
                 
                        }
                        }
                        fetchtodo()
                        
                        
                        },[])
           
                        useEffect( ()=>{
                            const fetchtodo  = async ()=>{
                              console.log("id")
                                      console.log(id)
                                     
                                    const response = await fetch ('/my-communities/'+id)
                                    const json = await response.json()
                                    
                                    
                           
                                    if(!response.ok){
                                        console.log(json.error)  
                                        
                                       }
                                    if(response.ok){
                        
                                        setcom(json.msg)
                                    console.log(json.msg)
                                     
                             
                                    }
                                    }
                                    fetchtodo()
                                    
                                    
                                    },[])

                          
    return (

      <div className='ml-20'>   

{user ?(<div>  

<h1 className="mb-4 text-xl font-bold leading-none inline tracking-tight text-gray-900 md:text-xl lg:text-xl dark:text-black capitalize mr-5">{user.name}</h1>
 <button className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'>follow</button>
<h1 className="mb-4 text-xl font-bold leading-none tracking-tight text-gray-900 md:text-xl lg:text-xl dark:text-black capitalize">about</h1>
<h1 className="mb-4 text-xl font-semibold leading-none tracking-tight text-gray-900 md:text-xl lg:text-lg dark:text-black capitalize">{user.about}</h1> 
</div>):null}

<div>
<h1  className="mb-4 text-xl font-bold leading-none tracking-tight text-gray-900 md:text-xl lg:text-xl dark:text-black capitalize">other events by same organiser</h1>
{event?(   <div>{event.map((item)=>{return(<div> <Link href={"/studentevents/"+item._id}><h1 className="mb-4 text-xl font-semibold leading-none tracking-tight text-gray-900 md:text-xl lg:text-lg dark:text-black capitalize" >{item.title}</h1></Link></div>)})}</div>):null}
</div>

<div>
<h1  className="mb-4 text-xl font-bold leading-none tracking-tight text-gray-900 md:text-xl lg:text-xl dark:text-black capitalize">communities by  organiser</h1>
{com?(   <div>{com.map((item)=>{return(<div> <Link href={"/communities/"+item._id}><h1 className="mb-4 text-xl font-semibold leading-none tracking-tight text-gray-900 md:text-xl lg:text-lg dark:text-black capitalize">{item.title}</h1></Link></div>)})}</div>):null}
</div>

      </div>
    );
  }

  
