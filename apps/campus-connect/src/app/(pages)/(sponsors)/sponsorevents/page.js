/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */

"use client"
import { useState,useEffect } from "react"
import Filterbar from "../../../../components/sp-filterbar"
import EventsContainer from "../../../../components/sp-eventcontainer"
  export default  function Home() {
    const [filteropt, setfilteropt] = useState(['all','all','all','all'])
      async function filteroptions(value){



console.log(value)

   setfilteropt( value)


    }
    return (
      <div>
       
       
        <div> 
            <h1 className="text-xl  top-44 z-50 text-black font-bold text-center font-sans">events</h1>
        
        
        </div>
        <div>
<Filterbar 
filteroptions={filteroptions}/>

<EventsContainer 
filteropt={filteropt}
/>

        </div>
       
         
              
        </div>
        
      
    );
  }

  