/* eslint-disable react/react-in-jsx-scope */


"use client"

import { useState } from "react"
export default function Page() {
    
   
    const [form, setform] = useState({
        _id:"",
    title: "",
    discription: "",
    image: "",
    price:0,
    location:"",
    city:'',
    fromdate:null,
    
    sttime:"",
    entime:"",
    category:"",
    subcategory:"",
    faq:  [{question:"",answer:''}] ,
    file:null
   
    } )



    
  



    









   
  return <div className="px-32 pb-20">
  <h1 className="text-5xl font-extrabold capitalize text-center">thanks for booking </h1>
  <h1 className="text-2xl font-bold capitalize text-center mt-10">you will recive your ticket on email... </h1>
    </div>
  }

  