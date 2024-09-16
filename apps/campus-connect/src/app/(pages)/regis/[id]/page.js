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
      console.log(id)
              
            const response = await fetch ('/participants/'+id)
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

      <div className='ml-20'>   

{event ?(<div>  
<h1 className='font-extrabold text-4xl capitalize'>number of registers :{event.length}</h1>
<hi>{event.map((item)=>{return <h1 className='font-semibold text-xl capitalize my-5'> name :{item.name} email:{item.email}</h1>})}</hi>
</div>):null}




      </div>
    );
  }

  
