/* eslint-disable react/no-unknown-property */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-key */
"use client"
import Link from "next/link"
import Events from "../../../../components/events"
import { useState,useEffect } from "react"

  export default  function Home() {
    
    const [events, setevents] = useState(null)
    const [filter, setfilter] = useState('')
    useEffect( ()=>{
        const fetchtodo  = async ()=>{
                  
                const response = await fetch ('/getstudentevents')
                const json = await response.json()
                
                
       
                if(!response.ok){
                    console.log(json.error)  
                    
                   }
                if(response.ok){
    
                  setevents(json.msg)
                
                 
         
                }
                }
                fetchtodo()
                
                
                },[filter])
    return (
      <div>
       
       
        <div>
<form class="max-w-md mx-auto">   
    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div class="relative">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search "  onChange={(e)=>{setfilter(e.target.value);console.log(e.target.value)}}/>
        
    </div>
</form>
</div>
          <div>
            {events?(events.filter((item)=>{
                if(filter === "") 
                    {
                    return item}
                    else{ var title =item.title
                      var disc =item.discription
                        var bhalu = title.toLowerCase()
                        var bhalu2 = disc.toLowerCase()
                        return (bhalu.includes(filter.toLowerCase()) ||bhalu2.includes(filter.toLowerCase()))  }


            }).map((item)=>{return<div><Link href={"/studentevents/"+item._id}><Events 
         title={item.title} 
discription={item.discription}
category={item.category}
price={item.price}
image={item.image}
fromdate={item.fromdate}
         /></Link></div>})):null}
            </div> 
        </div>
        
      
    );
  }

  