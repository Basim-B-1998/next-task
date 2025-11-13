'use client'
import React, { useState } from 'react'
import { useSearchParams } from 'next/navigation'
import Image from "next/image";


const Page = () => {

const params = useSearchParams();
const mobile = params.get("mobile");
  const [form,setForm] = useState({
    name : '',
    email: '',
    qualification: ''
  })

  const [file,setFile] = useState<File | null>(null)
  const [message,setMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData=new FormData()
    if (file) formData.append('profile_image',file)
    formData.append('name',form.name )
    formData.append('email',form.email)
    formData.append('qualification',form.qualification)

    formData.append('mobile',mobile||'')

    const res = await fetch('/api/auth/create-profile',{
      method:'POST',
      body: formData
    })
    const data = await res.json()
    setMessage(data.message)
  }

  return (
    <>
       <p className="text-2xl mt-4 font-bold mb-8">Add Your Details</p>

     

       <form onSubmit={handleSubmit}>
       <input type="file" id="upload" className="hidden" onChange={(e)=>setFile(e.target.files?.[0]||null)}/>
       <label htmlFor="upload" className="border border-dashed text-xs flex flex-col justify-center items-center w-[120px] h-[120px] ml-15 cursor-pointer">
         {!file && (
    <div className="flex flex-col items-center text-[10px]">
      <span className="text-xl">+</span>
      <span>Add Your Profile picture</span>
    </div>
  )}
    {file && (
      <div className="relative">
      <button className="absolute right-0 text-xl -top-2 font-bold" onClick={()=>setFile(null)}>x</button>
    <img
      src={URL.createObjectURL(file)}
      className="w-[120px] h-[120px] rounded-md"
    />
    </div>
  )}
    
  </label>
       
       <input className="border mt-10 w-3/4 h-12" type="text" placeholder="Enter your Full Name" value={form.name} onChange={(e)=>setForm({...form,name:e.target.value})}/>
       <input className="border mt-4 w-3/4 h-12" type="text" placeholder="Enter your Email Address" value={form.email} onChange={(e)=>setForm({...form,email:e.target.value})}/>
       <input className="border mt-4 w-3/4 h-12" type="text" placeholder="Enter your Qualification" value={form.qualification} onChange={(e)=>setForm({...form,qualification:e.target.value})}/>
       <button className="mt-5 mb-5 border rounded-xl w-3/4 bg-gray-600 text-white h-10">Get Started</button>
       </form>
       {message && <p className='mt-2 text-green-500'>{message}</p>}
    </>
  )
}


export default Page