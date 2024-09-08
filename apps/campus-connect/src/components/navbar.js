
"use client"

import { session_new } from '../lib/session-new'
import { useState,useEffect } from "react"


export default function Navbar(props) {
    const [user, setuser] = useState()
    useEffect( ()=>{
        const fetchtodo  = async ()=>{
                  const user = await session_new()
              
                
                setuser(user)
       
              
                }
                fetchtodo()
                
                
                },[])
    
    return(<div className=''><div className='h-26'>  {  user?(<div className="   my-5 ml-14  inline-grid rounded-xl bg-screen">
          {user.type == "student"?(<div className='w-screen bg-slate-400'>  <nav class="bg-white border-gray-200 ">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <a href="" class="flex items-center space-x-3 rtl:space-x-reverse">
      
      <span class="self-center text-3xl font-bold blackspace-nowrap dark:text-black">Campus Connect</span>
  </a>
  <div class="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
      <button data-dropdown-toggle="user-dropdown"   type="button" class="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false"  data-dropdown-placement="bottom">
        <span class="sr-only">Open user menu</span>
        <img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="user photo"/>
      </button>
     


     
      
  </div>
  <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
    <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-black dark:bg-white md:dark:bg-white dark:border-gray-700">
      <li>
        <a href="/home" class="block py-2 px-3 text-black bg-blue-700 font-bold capitalize rounded md:bg-transparent md:text-blue-700 md:p-0 text-xl md:dark:text-blue-500" aria-current="page">Home</a>
      </li>
      <li>
        <a href="/studentevents" class="block py-2 px-3 text-gray-900 font-bold capitalize rounded hover:bg-gray-100 md:hover:bg-transparent text-xl md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent dark:border-gray-700">browse events</a>
      </li>
      <li>
        <a href="communities" class="block py-2 px-3 text-gray-900 rounded font-bold capitalize hover:bg-gray-100 md:hover:bg-transparent text-xl md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent dark:border-gray-700">communities</a>
      </li>
      <li>
        <a href="/searchsponevents" class="block py-2 px-3 text-gray-900 rounded font-bold capitalize hover:bg-gray-100 md:hover:bg-transparent text-xl md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent dark:border-gray-700">search events</a>
      </li>
      <li className='h-6 z-50 overflow-hidden px-1 hover:h-28 absolute top-10  right-32 bg-white     '>
        
        
        
        <a href="#  " class="block py-2  text-gray-900 font-bold capitalize rounded hover:bg-gray-100 md:hover:bg-transparent text-xl md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent "> profile <svg class="w-2.5 h-2.5 ms-3 inline" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
</svg></a>
        <a href="/bookings  " class="block py-2 px-3 text-gray-900 rounded font-bold text-xl capitalize hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-black  md:dark:hover:bg-transparent dark:border-gray-700">bookings</a>
        <a href="/yourfavs" class="block py-2 px-3 text-gray-900 rounded font-bold capitalize hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent text-xl dark:border-gray-700">favourite</a>
     
     
      </li>
    </ul>
  </div>
  </div>
</nav></div>):null}
          
       
        </div>):null   } </div>
        
        <div className=' h-20 absolute -top-2  '>  {  user?(<div className="   my-5 ml-14  inline-grid rounded-xl bg-screen">
          {user.type == "organiser"?(<div className='w-screen '>  <nav class="bg-white border-gray-200 pb-10">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <a href="" class="flex items-center space-x-3 rtl:space-x-reverse">
      
      <span class="self-center text-3xl font-bold blackspace-nowrap  dark:text-black">Campus Connect</span>
  </a>
  <div class="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
      <button data-dropdown-toggle="user-dropdown"   type="button" class="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false"  data-dropdown-placement="bottom">
        <span class="sr-only">Open user menu</span>
        <img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="user photo"/>
      </button>
     


     
      
  </div>
  <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
    <ul class="flex flex-col p-4 md:p-0 mt-4 border border-gray-100 font-bold text-xl capitalize rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-black dark:bg-white md:dark:bg-white dark:border-gray-700">
      <li>
        <a href="/home" class="block py-2 px-3 font-bold capitalize text-black bg-blue-700 rounded md:bg-transparent  md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">home</a>
      </li>
      <li>
        <a href="/addstudentevent" class="block py-2 px-3 font-bold capitalize text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent dark:border-gray-700">add events</a>
      </li>
      
      <li>
        <a href="/addcommunity" class="block py-2 px-3 font-bold capitalize text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent dark:border-gray-700">add community</a>
      </li>
      <li className='h-6 z-50 overflow-hidden px-1 hover:h-28 absolute top-10  right-64 bg-white      '>
        
        
        
        <a href="#  " class="block py-2  text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 font-bold capitalize dark:hover:text-black md:dark:hover:bg-transparent "> profile <svg class="w-2.5 h-2.5 ms-3 inline" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
</svg></a>
        <a href="/myevents  " class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-blue-500  font-bold capitalize dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent dark:border-gray-700">your events</a>
        <a href="/my-communities" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-blue-500  font-bold capitalize dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent dark:border-gray-700">your communities</a>
       
     
     
      </li>
     
    </ul>
  </div>
  </div>
</nav></div>):null}
          
       
        </div>):null   } </div>
        
        <div className='absolute -top-5  h-20   '>  {  user?(<div className="   my-5 ml-14  inline-grid rounded-xl bg-screen">
          {user.type == "sponsor"?(<div className='w-screen '>  <nav class="bg-white border-gray-200 ">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <a href="" class="flex items-center space-x-3 rtl:space-x-reverse">
      
      <span class="self-center text-3xl font-bold blackspace-nowrap dark:text-black">Campus Connect</span>
  </a>
  <div class="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
      <button data-dropdown-toggle="user-dropdown"   type="button" class="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false"  data-dropdown-placement="bottom">
        <span class="sr-only">Open user menu</span>
        <img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="user photo"/>
      </button>
     


     
      
  </div>
  <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
    <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-black dark:bg-white md:dark:bg-white dark:border-gray-700">
      <li>
        <a href="/home" class="block py-2 px-3 text-black font-bold text-xl capitalize bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">home</a>
      </li>
      <li>
        <a href="/sponsorevents" class="block py-2 px-3 text-gray-900 font-bold text-xl capitalize rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent dark:border-gray-700">browse</a>
      </li>
      <li>
        <a href="/searchsponevents" class="block py-2 px-3 text-gray-900 font-bold text-xl capitalize rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent dark:border-gray-700">search events</a>
      </li>
    
    </ul>
  </div>
  </div>
</nav></div>):null}
          
       
        </div>):null   } </div></div>

        
        
      
      
        
        )
  }

  