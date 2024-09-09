/* eslint-disable no-unused-vars */
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
    studentfaq:  [{question:"",answer:''}] ,

    sponfaq:  [{question:"",answer:''}],
    pitchtech:'',
    offer:  [{name:"",price:0}] ,
    isopentosponsor:false,

    file:null
   
    } )


    function addsize(){
                 
        setform((prevState)=>{
            return{
                ...prevState,
                studentfaq:[...prevState.studentfaq,{question:"",answer:""}] 
            }
        })

       
    }
    function addsize2(){
                 
        setform((prevState)=>{
            return{
                ...prevState,
                sponfaq:[...prevState.sponfaq,{question:"",answer:""}] 
            }
        })

       
    }

    function addsize3(){
                 
        setform((prevState)=>{
            return{
                ...prevState,
                offer:[...prevState.offer,{name:"",price:0}] 
            }
        })

       
    }
    async function postreq(e){

       
        e.preventDefault()
       ;
        
        
       const formdata  = new FormData();

       

       formdata.append("title",form.title)
       formdata.append("discription",form.discription)
       formdata.append("image",form.image||"")
       formdata.append("price",form.price.toString())
       formdata.append("location",form.location)
       formdata.append("city",form.city)
       formdata.append("fromdate",form.fromdate)
       formdata.append("todate",form.todate)
       formdata.append("sttime",form.sttime)
       formdata.append("entime",form.entime)
       formdata.append("category",form.category)
       formdata.append("subcategory",form.subcategory)

       formdata.append("studentfaq",JSON.stringify(form.studentfaq) )
       formdata.append("sponfaq",JSON.stringify(form.sponfaq) )
       formdata.append("isopentosponsor",JSON.stringify(form.isopentosponsor) )
       formdata.append("offer",JSON.stringify(form.offer) )
       formdata.append("pitchtech",JSON.stringify(form.pitchtech) )
              const response = await fetch('/addstudentevents',{
                  method:"POST",
                  body :  formdata
                   //convert to json from object
                  
              })
              const json = await response.json()
              if (!response.ok){
            console.log(json.error)
        
             
              }
              if (response.ok){
 const response3 =await fetch('/sendfolloweremail',{
                method:"POST",
                //convert to json from object
                
            })



// //////////////////
const json = await response3.json()
if (!response3.ok){
console.log(json.error)


}
if (response3.ok){
console.log("hiiii")


}
            ///////////////////////
                console.log("uploading now")
                const formdata  = new FormData();
                formdata.append("file",form.file)
                const response1 = await fetch('/api/image',{
                 method:"POST",
                 body :  formdata //convert to json from object
                 



             })
             
            
            
              }

    }
  



    async function deletesize(id ){
const newform =  await form.studentfaq.filter((item,index)=>{
return index !==id
})

console.log(  newform )
await setform( (prevState)=>{
return{
...prevState,
studentfaq:newform
}
})

console.log(form.faq)

    }

    async function deletesize2(id ){
        const newform =  await form.sponfaq.filter((item,index)=>{
        return index !==id
        })
        
        console.log(  newform )
        await setform( (prevState)=>{
        return{
        ...prevState,
        sponfaq:newform
        }
        })
        
        console.log(form.faq)
        
            }

            async function deletesize3(id ){
                const newform =  await form.offer.filter((item,index)=>{
                return index !==id
                })
                
                console.log(  newform )
                await setform( (prevState)=>{
                return{
                ...prevState,
                offer:newform
                }
                })
                
                console.log(form.faq)
                
                    }


   
  return <div className="px-32 pb-20">
    <h1 className="h-28 bg-slate-100 text-6xl font-bold font-sans text-red-500 text-center italic pt-10 mb-10">Add new item</h1>
     <form>
     <div className="flex items-center justify-center w-full">
    <label htmlFor="dropzone-file"  className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
        <div  className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg  className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
            </svg>
            <p  className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span  className="font-semibold">Click to upload</span> or drag and drop</p>
            <p  className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
        </div>
        <input id="dropzone-file" type="file"  className="hidden" onChange={(  (e)=>  {form.image=   e.target.files?.[0]?.name;   setform((prevState)=>{
            return{
                ...prevState,
                file:e.target.files?.[0] 
            }
        }) }  ) } />
    </label>
</div> 
  <div className="grid gap-6 mb-6 md:grid-cols-2">
  
      <div>
          <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"> title</label>
          <input type="text" onChange={   (e)=>  {form.title=e.target.value} } id="first_name" className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-slate-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 "  defaultValue={form.title} required />
      </div>
      
      <div>
          <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">discription</label>
          <input type="text" onChange={   (e)=>  {form.discription=e.target.value} } id="last_name" className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-slate-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 "  defaultValue={form.discription} required />
      </div>
      <div>
          <label htmlFor="company" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">price</label>
          <input type="text" onChange={   (e)=>  {form.price=   Number(e.target.value) } } id="company" className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-slate-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 " placeholder="Flowbite" defaultValue={form.price} required />
      </div>  
      <div>
          <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">city</label>
          <input type="text" onChange={   (e)=>  {form.city=e.target.value} } id="first_name" className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-slate-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 "  defaultValue={form.title} required />
      </div>
      <div>
          <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">location</label>
          <input type="text" onChange={   (e)=>  {form.location=e.target.value} }  className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-slate-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 "  defaultValue={form.type} required />
      </div>
      
      <div>
          <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"> date</label>
          <input type="date" onChange={   (e)=>  {form.fromdate=e.target.value} }  className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-slate-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 "  defaultValue={form.type} required />
      </div>
      
      <div>
          <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">starting time</label>
          <input type="time" onChange={   (e)=>  {form.sttime=e.target.value} }  className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-slate-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 "  defaultValue={form.type} required />
      </div>
      <div>
          <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">ending time</label>
          <input type="time" onChange={   (e)=>  {form.entime=e.target.value} }  className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-slate-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 "  defaultValue={form.type} required />
      </div>
      <div>
          

  <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Select an category</label>
  <select id="countries" onChange={   (e)=>  {form.category=e.target.value} }  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
    <option selected>Choose a category</option>
    <option value="tech">tech</option>
    <option value="business">business</option>
    <option value="art">art</option>
    <option value="sports">sports</option>
  </select>


      </div>
      <div className="">
          

 
  <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Select a sub category</label>
  <select id="select" size={1} onFocus=  { (e)=> { e.target.size = 5}}  onBlur =  { (e)=> { e.target.size = 1}} onChange={   (e)=>  {form.subcategory=e.target.value; e.target.size = 1} }  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500  ">
    
    <option selected>Choose a category</option>
    <option value="educational-quiz">educational-quiz</option>
    <option value="educational-test">educational-test</option>
    <option value="educational-seminar">educational-seminar</option>
    <option value="sports-indoor">sports-indoor</option>
    <option value="studies-outdoor">studies-outdoor</option>
    <option value="event-fest">event-fest</option>
    <option value="event-hackathon">event-hackathon</option>
    
    
  </select>
  


      </div>
   
      <div>
 

      </div>
     


      
  </div>
  
<div class="flex items-center mb-4">
    <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" onChange={   (e)=>  {    if(e.target.checked ==true) {form.isopentosponsor=true}} }/>
    <label for="default-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">open to sponsor</label>
</div>
<label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">pitch tech</label>
<input type="text" onChange={   (e)=>  {form.pitchtech=e.target.value;console.log(form)} }  className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-slate-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 "    required />

  <h1 className="h-28 bg-slate-100 text-6xl font-bold font-sans text-red-500 text-center italic pt-10"> student FAQ</h1>
<div>{form.studentfaq.map((item,index)=>{
  // eslint-disable-next-line react/jsx-key
  return (<div className="grid gap-6 mb-6 md:grid-cols-1" >
      <div>
          
          <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">question</label>
          <input type="text" onChange={   (e)=>  {form.studentfaq[index].question=e.target.value;console.log(form.studentfaq)} }  className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-slate-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 "  placeholder={item.name}  required />
      </div>
      <div>
          
          <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">answer</label>
          <input type="text" onChange={   (e)=>  {form.studentfaq[index].answer=e.target.value;console.log(form.studentfaq)} }  className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-slate-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 "  placeholder={item.name}  required />
      </div>
      <div>
          
          
     <div className='text-center h-10 -mt-8 bg-slate-300 w-10 rounded-lg inline-block relative ml-3 top-4'><h1 className='  relative top-2 left-2 '  onClick={ ()=>{deletesize(index)}   }><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 50 50">
<path d="M 21 0 C 19.355469 0 18 1.355469 18 3 L 18 5 L 10.1875 5 C 10.0625 4.976563 9.9375 4.976563 9.8125 5 L 8 5 C 7.96875 5 7.9375 5 7.90625 5 C 7.355469 5.027344 6.925781 5.496094 6.953125 6.046875 C 6.980469 6.597656 7.449219 7.027344 8 7 L 9.09375 7 L 12.6875 47.5 C 12.8125 48.898438 14.003906 50 15.40625 50 L 34.59375 50 C 35.996094 50 37.1875 48.898438 37.3125 47.5 L 40.90625 7 L 42 7 C 42.359375 7.003906 42.695313 6.816406 42.878906 6.503906 C 43.058594 6.191406 43.058594 5.808594 42.878906 5.496094 C 42.695313 5.183594 42.359375 4.996094 42 5 L 32 5 L 32 3 C 32 1.355469 30.644531 0 29 0 Z M 21 2 L 29 2 C 29.5625 2 30 2.4375 30 3 L 30 5 L 20 5 L 20 3 C 20 2.4375 20.4375 2 21 2 Z M 11.09375 7 L 38.90625 7 L 35.3125 47.34375 C 35.28125 47.691406 34.910156 48 34.59375 48 L 15.40625 48 C 15.089844 48 14.71875 47.691406 14.6875 47.34375 Z M 18.90625 9.96875 C 18.863281 9.976563 18.820313 9.988281 18.78125 10 C 18.316406 10.105469 17.988281 10.523438 18 11 L 18 44 C 17.996094 44.359375 18.183594 44.695313 18.496094 44.878906 C 18.808594 45.058594 19.191406 45.058594 19.503906 44.878906 C 19.816406 44.695313 20.003906 44.359375 20 44 L 20 11 C 20.011719 10.710938 19.894531 10.433594 19.6875 10.238281 C 19.476563 10.039063 19.191406 9.941406 18.90625 9.96875 Z M 24.90625 9.96875 C 24.863281 9.976563 24.820313 9.988281 24.78125 10 C 24.316406 10.105469 23.988281 10.523438 24 11 L 24 44 C 23.996094 44.359375 24.183594 44.695313 24.496094 44.878906 C 24.808594 45.058594 25.191406 45.058594 25.503906 44.878906 C 25.816406 44.695313 26.003906 44.359375 26 44 L 26 11 C 26.011719 10.710938 25.894531 10.433594 25.6875 10.238281 C 25.476563 10.039063 25.191406 9.941406 24.90625 9.96875 Z M 30.90625 9.96875 C 30.863281 9.976563 30.820313 9.988281 30.78125 10 C 30.316406 10.105469 29.988281 10.523438 30 11 L 30 44 C 29.996094 44.359375 30.183594 44.695313 30.496094 44.878906 C 30.808594 45.058594 31.191406 45.058594 31.503906 44.878906 C 31.816406 44.695313 32.003906 44.359375 32 44 L 32 11 C 32.011719 10.710938 31.894531 10.433594 31.6875 10.238281 C 31.476563 10.039063 31.191406 9.941406 30.90625 9.96875 Z"></path>
</svg></h1>

</div>
      
      </div>


      </div>)
})}

<h1 onClick={addsize} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-blue-800"> ADD</h1>
</div>
 <h1 className="h-28 bg-slate-100 text-6xl font-bold font-sans text-red-500 text-center italic pt-10"> sponsor FAQ</h1>
<div>{form.sponfaq.map((item,index)=>{
  // eslint-disable-next-line react/jsx-key
  return (<div className="grid gap-6 mb-6 md:grid-cols-1" >
      <div>
          
          <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">question</label>
          <input type="text" onChange={   (e)=>  {form.sponfaq[index].question=e.target.value;console.log(form.sponfaq)} }  className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-slate-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 "  placeholder={item.name}  required />
      </div>
      <div>
          
          <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">answer</label>
          <input type="text" onChange={   (e)=>  {form.sponfaq[index].answer=e.target.value;console.log(form.sponfaq)} }  className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-slate-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 "  placeholder={item.name}  required />
      </div>
      <div>
          
          
     <div className='text-center h-10 -mt-8 bg-slate-300 w-10 rounded-lg inline-block relative ml-3 top-4'><h1 className='  relative top-2 left-2 '  onClick={ ()=>{deletesize2(index)}   }><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 50 50">
<path d="M 21 0 C 19.355469 0 18 1.355469 18 3 L 18 5 L 10.1875 5 C 10.0625 4.976563 9.9375 4.976563 9.8125 5 L 8 5 C 7.96875 5 7.9375 5 7.90625 5 C 7.355469 5.027344 6.925781 5.496094 6.953125 6.046875 C 6.980469 6.597656 7.449219 7.027344 8 7 L 9.09375 7 L 12.6875 47.5 C 12.8125 48.898438 14.003906 50 15.40625 50 L 34.59375 50 C 35.996094 50 37.1875 48.898438 37.3125 47.5 L 40.90625 7 L 42 7 C 42.359375 7.003906 42.695313 6.816406 42.878906 6.503906 C 43.058594 6.191406 43.058594 5.808594 42.878906 5.496094 C 42.695313 5.183594 42.359375 4.996094 42 5 L 32 5 L 32 3 C 32 1.355469 30.644531 0 29 0 Z M 21 2 L 29 2 C 29.5625 2 30 2.4375 30 3 L 30 5 L 20 5 L 20 3 C 20 2.4375 20.4375 2 21 2 Z M 11.09375 7 L 38.90625 7 L 35.3125 47.34375 C 35.28125 47.691406 34.910156 48 34.59375 48 L 15.40625 48 C 15.089844 48 14.71875 47.691406 14.6875 47.34375 Z M 18.90625 9.96875 C 18.863281 9.976563 18.820313 9.988281 18.78125 10 C 18.316406 10.105469 17.988281 10.523438 18 11 L 18 44 C 17.996094 44.359375 18.183594 44.695313 18.496094 44.878906 C 18.808594 45.058594 19.191406 45.058594 19.503906 44.878906 C 19.816406 44.695313 20.003906 44.359375 20 44 L 20 11 C 20.011719 10.710938 19.894531 10.433594 19.6875 10.238281 C 19.476563 10.039063 19.191406 9.941406 18.90625 9.96875 Z M 24.90625 9.96875 C 24.863281 9.976563 24.820313 9.988281 24.78125 10 C 24.316406 10.105469 23.988281 10.523438 24 11 L 24 44 C 23.996094 44.359375 24.183594 44.695313 24.496094 44.878906 C 24.808594 45.058594 25.191406 45.058594 25.503906 44.878906 C 25.816406 44.695313 26.003906 44.359375 26 44 L 26 11 C 26.011719 10.710938 25.894531 10.433594 25.6875 10.238281 C 25.476563 10.039063 25.191406 9.941406 24.90625 9.96875 Z M 30.90625 9.96875 C 30.863281 9.976563 30.820313 9.988281 30.78125 10 C 30.316406 10.105469 29.988281 10.523438 30 11 L 30 44 C 29.996094 44.359375 30.183594 44.695313 30.496094 44.878906 C 30.808594 45.058594 31.191406 45.058594 31.503906 44.878906 C 31.816406 44.695313 32.003906 44.359375 32 44 L 32 11 C 32.011719 10.710938 31.894531 10.433594 31.6875 10.238281 C 31.476563 10.039063 31.191406 9.941406 30.90625 9.96875 Z"></path>
</svg></h1>

</div>
      
      </div>


      </div>)
})}

<h1 onClick={addsize2} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-blue-800"> ADD</h1>
</div>
<h1 className="h-28 bg-slate-100 text-6xl font-bold font-sans text-red-500 text-center italic pt-10"> offer</h1>
<div>{form.offer.map((item,index)=>{
  // eslint-disable-next-line react/jsx-key
  return (<div className="grid gap-6 mb-6 md:grid-cols-1" >
      <div>
          
          <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">name</label>
          <input type="text" onChange={   (e)=>  {form.offer[index].name=e.target.value;console.log(form.offer)} }  className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-slate-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 "  placeholder={item.name}  required />
      </div>
      <div>
          
          <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">price</label>
          <input type="text" onChange={   (e)=>  {form.offer[index].price=e.target.value;console.log(form.offer)} }  className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-slate-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 "  placeholder={item.name}  required />
      </div>
      <div>
          
          
     <div className='text-center h-10 -mt-8 bg-slate-300 w-10 rounded-lg inline-block relative ml-3 top-4'><h1 className='  relative top-2 left-2 '  onClick={ ()=>{deletesize3(index)}   }><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 50 50">
<path d="M 21 0 C 19.355469 0 18 1.355469 18 3 L 18 5 L 10.1875 5 C 10.0625 4.976563 9.9375 4.976563 9.8125 5 L 8 5 C 7.96875 5 7.9375 5 7.90625 5 C 7.355469 5.027344 6.925781 5.496094 6.953125 6.046875 C 6.980469 6.597656 7.449219 7.027344 8 7 L 9.09375 7 L 12.6875 47.5 C 12.8125 48.898438 14.003906 50 15.40625 50 L 34.59375 50 C 35.996094 50 37.1875 48.898438 37.3125 47.5 L 40.90625 7 L 42 7 C 42.359375 7.003906 42.695313 6.816406 42.878906 6.503906 C 43.058594 6.191406 43.058594 5.808594 42.878906 5.496094 C 42.695313 5.183594 42.359375 4.996094 42 5 L 32 5 L 32 3 C 32 1.355469 30.644531 0 29 0 Z M 21 2 L 29 2 C 29.5625 2 30 2.4375 30 3 L 30 5 L 20 5 L 20 3 C 20 2.4375 20.4375 2 21 2 Z M 11.09375 7 L 38.90625 7 L 35.3125 47.34375 C 35.28125 47.691406 34.910156 48 34.59375 48 L 15.40625 48 C 15.089844 48 14.71875 47.691406 14.6875 47.34375 Z M 18.90625 9.96875 C 18.863281 9.976563 18.820313 9.988281 18.78125 10 C 18.316406 10.105469 17.988281 10.523438 18 11 L 18 44 C 17.996094 44.359375 18.183594 44.695313 18.496094 44.878906 C 18.808594 45.058594 19.191406 45.058594 19.503906 44.878906 C 19.816406 44.695313 20.003906 44.359375 20 44 L 20 11 C 20.011719 10.710938 19.894531 10.433594 19.6875 10.238281 C 19.476563 10.039063 19.191406 9.941406 18.90625 9.96875 Z M 24.90625 9.96875 C 24.863281 9.976563 24.820313 9.988281 24.78125 10 C 24.316406 10.105469 23.988281 10.523438 24 11 L 24 44 C 23.996094 44.359375 24.183594 44.695313 24.496094 44.878906 C 24.808594 45.058594 25.191406 45.058594 25.503906 44.878906 C 25.816406 44.695313 26.003906 44.359375 26 44 L 26 11 C 26.011719 10.710938 25.894531 10.433594 25.6875 10.238281 C 25.476563 10.039063 25.191406 9.941406 24.90625 9.96875 Z M 30.90625 9.96875 C 30.863281 9.976563 30.820313 9.988281 30.78125 10 C 30.316406 10.105469 29.988281 10.523438 30 11 L 30 44 C 29.996094 44.359375 30.183594 44.695313 30.496094 44.878906 C 30.808594 45.058594 31.191406 45.058594 31.503906 44.878906 C 31.816406 44.695313 32.003906 44.359375 32 44 L 32 11 C 32.011719 10.710938 31.894531 10.433594 31.6875 10.238281 C 31.476563 10.039063 31.191406 9.941406 30.90625 9.96875 Z"></path>
</svg></h1>

</div>
      
      </div>


      </div>)
})}

<h1 onClick={addsize3} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-blue-800"> ADD</h1>
</div>
  <button type="submit"  onClick={postreq} className="text-black bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none dark:bg-slate-100 dark:hover:bg-red-500 border-2 border-black focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save</button>
</form></div>
  }

  
