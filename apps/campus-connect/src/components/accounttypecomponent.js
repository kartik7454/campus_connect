
"use client"

import { useSession } from "next-auth/react"

import React  from 'react';



  export default  function Accounttypcon() {
    
const {update}=useSession()
     
    async function handelclick(value){
      
     
       console.log(value) 
       const response = await fetch('/selecttype',{
        method:"POST",
        body : value,
        headers: {
          "Content-Type": "text/html",
        }

        
    })
    await update({ type: value })
   
    
   
    const json = await response.json()
    if(!response.ok){
      
      console.log(json.error)  
      
     }
  if(response.ok){
    console.log("hi")
    window.location.href='/';
    
  }

    }
    return (
        
      <div className="text-center">
       
       <h1>choose account type</h1>
       <button type="button" className="px-5 py-3 mx-5 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"value="student" onClick={  (e)=>{handelclick(e.target.value)} }>Student</button>
       <button type="button" className="px-5 py-3 mx-5 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" value="organiser" onClick={  (e)=>{handelclick(e.target.value)} }>Organiser</button>
       <button type="button" className="px-5 py-3 mx-5 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" value="sponsor" onClick={  (e)=>{handelclick(e.target.value)} }>Sponsor</button>
        </div>
        
      
    );
  }

  