/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/react-in-jsx-scope */
"use client"
import { useState } from "react"
export default function Filterbar(props) {
    const [filter, setfilter] = useState(["all","all","all","all"])
    async function handelclick(value,id){
console.log(value)
  let arr =  filter
  arr[id]=value

  
setfilter(arr)
      props.filteroptions(arr)
    }
async function reset(){
    setfilter(["all","all","all","all","all","all"])
    let arr =  ["all","all","all","all","all","all"]
    props.filteroptions(arr)
  }
    return (
      <div>
       
<div className="bg-slate-300 w-96 ml-28 rounded-lg px-2 py-5">
<h1 className="font-bold text-2xl capitalize text-center mb-5 " >filter</h1>    

    <div className="h-10 bg-slate-400 overflow-hidden hover:h-auto mb-2 ">

    <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" class="text-white w-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5  text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">category <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
</svg>
</button>


<div id="dropdown" class="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
      
    <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" id="1" Value ="aa" onClick={((e)=>{handelclick(e.target.text,e.target.id);console.log(e.target.text)})}>all</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" id="1" Value ="studies" onClick={((e)=>{handelclick(e.target.text,e.target.id);console.log(e.target.text)})}>tech</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" id="1" value="sports" onClick={((e)=>{handelclick(e.target.text,e.target.id)})}>business</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" id="1" value="party" onClick={((e)=>{handelclick(e.target.text,e.target.id)})}>art</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" id="1" value="trip" onClick={((e)=>{handelclick(e.target.text,e.target.id)})}>sports</a>
      </li>
    </ul>
</div>

    </div> 
    <div className="h-10 bg-slate-400 overflow-hidden hover:h-auto  mb-2 ">

    <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" class="text-white w-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5  text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">city <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
</svg>
</button>


<div id="dropdown" class="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" id="2" onClick={((e)=>{handelclick(e.target.text,e.target.id)})}>all</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" id="2" onClick={((e)=>{handelclick(e.target.text,e.target.id)})}>amritsar</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" id="2" onClick={((e)=>{handelclick(e.target.text,e.target.id)})}>ubs</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" id="2" onClick={((e)=>{handelclick(e.target.text,e.target.id)})}>hm</a>
      </li>
    </ul>
</div>


    </div>

    <div className="h-10 bg-slate-400 overflow-hidden hover:h-auto  mb-2 ">

<button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" class="text-white w-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5  text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">likes <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
</svg>
</button>


<div id="dropdown" class="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
<ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
  <li>
    <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" id="4" onClick={((e)=>{handelclick(e.target.text,e.target.id)})}>all</a>
  </li>
  <li>
    <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" id="4" onClick={((e)=>{handelclick(e.target.text,e.target.id)})}>mostliked</a>
  </li>
  
</ul>
</div>


</div>
<button onClick={  ()=>{reset()} } id="dropdownDefaultButton" data-dropdown-toggle="dropdown" class="text-white   w-full  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5  text-center inline-flex items-center dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-blue-800" type="button">remove filters 
</button>
</div>

        </div>
       
         
              
       
        
      
    );
  }

  
