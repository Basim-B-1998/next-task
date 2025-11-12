import React from 'react'

const page = () => {
  return (
    <>
       <p className="text-2xl mt-4 font-bold">Enter the code we texted you</p>
       <p className="mt-4">We’ve sent an SMS to +91 1234 567891</p>
       <input className="border mt-4 w-3/4 h-12" type="text" placeholder="Enter sms code"/>
       <p className="mt-3 text-xs">Your 6 digit code is on its way. This can sometimes take a <br/>few moments to arrive.</p>
       <span className="font-semibold underline mt-5 text-sm">Resend code</span>
       <button className="mt-30 mb-5 border rounded-xl w-3/4 bg-gray-600 text-white h-10">Get Started</button>
    </>
  )
}

export default page