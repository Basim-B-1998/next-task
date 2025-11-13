"use client";
import React, { useState } from 'react'

const Page = () => {

  const [mobile,setMobile] = useState('')
  const [message,setMessage] = useState('')

  const handleSubmit = async (e) =>{
    e.preventDefault()
    const formData = new FormData()
    formData.append('mobile',mobile)
    const res = await fetch('/api/auth/send-otp',{
      method: 'POST',
      body: formData
    })
    const data = await res.json()
    setMessage(data.message)
    if (data.success){
      window.location.href = '/auth/verify-otp'
    }
  }

  return (
    <>
        <p className="text-2xl mt-4 font-bold">Enter your phone number</p>
          <p className="mt-4">We use your mobile number to identify your <br/> account</p>
          <form onSubmit={handleSubmit}>
            <input className="border mt-4 w-3/4 h-12" type="text" placeholder="Enter phone number" value={mobile} onChange={(e)=>setMobile(e.target.value)}/>
          
          {message && <p className="mt-2 text-green-500">{message}</p>}
          <p className="mt-3 text-xs">By tapping Get started, you agree to the Terms & Conditions</p>
          <button type="submit" className="mt-30 mb-5 border rounded-xl w-3/4 bg-gray-600 text-white h-10">Get Started</button>
          </form>
    </>
  )
}

export default Page

       