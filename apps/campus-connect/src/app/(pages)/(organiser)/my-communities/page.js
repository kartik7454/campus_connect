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
    
    
    useEffect( ()=>{
    const fetchtodo  = async ()=>{
          const session= await getUserSession()
      
              
            const response = await fetch ('/my-communities/'+session.email)
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

{user ?(<div>  

<h1>{user.name}</h1> 

</div>):null}

<div>
<h1 className='mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-black text-center'>my  events </h1>
{event?(   <div>{event.map((item)=>{return(<div> <Link href={"/studentevents/"+item._id}><h1 className='mb-4  font-semibold leading-none tracking-tight text-gray-900 md:text-lg lg:text-3xl dark:text-black text-center'>{item.title}</h1></Link></div>)})}</div>):null}
</div>



      </div>
    );
  }

  