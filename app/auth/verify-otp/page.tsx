"use client";
import { useSearchParams } from 'next/navigation'
import React, { useContext, useState } from 'react'
import {AuthContext} from '../../../context/AuthContext'


const Page = () => {
  const params = useSearchParams()
  const mobile = params.get('mobile')
  const [otp,setOtp] = useState('')
  const [message,setMessage] = useState('')

  const auth = useContext(AuthContext)
  const login = auth?.login


  const handleSubmit = async (e) =>{
    e.preventDefault()
    const formData = new FormData()
    formData.append('otp',otp)

    const res =await fetch('/api/auth/verify-otp',{
      method : 'POST',
      body : formData
    })
    const data = await res.json()
    
    if (data.success && data.access_token){
      if (login){ 
        login(data.access_token)
      }
      window.location.href = `/auth/create-profile?mobile=${mobile}`
}
  setMessage(data.message)
}

  return (
   <>
       <p className="text-2xl mt-4 font-bold">Enter the code we texted you</p>
       <p className="mt-4">We’ve sent an SMS to {mobile}</p>
       <form onSubmit={handleSubmit}>
          <input className="border mt-4 w-3/4 h-12" type="text" placeholder="Enter sms code" value={otp} onChange={((e)=>setOtp(e.target.value))}/>
       
       {message && <p className='mt-2 text-green-500'>{message}</p>}
       <p className="mt-3 text-xs">Your 6 digit code is on its way. This can sometimes take a <br/>few moments to arrive.</p>
       <span className="font-semibold underline mt-5 text-sm cursor-pointer">Resend code</span>
       <button type='submit' className="mt-30 mb-5 border rounded-xl w-3/4 bg-gray-600 text-white h-10">Get Started</button>
       </form>
    </>
  )
}

export default Page