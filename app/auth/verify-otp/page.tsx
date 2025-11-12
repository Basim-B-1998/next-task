import React from 'react'


const page = () => {
  return (
   <>
          <p className="text-2xl mt-4 font-bold">Enter your phone number</p>
          <p className="mt-4">We use your mobile number to identify your <br/> account</p>
          <input className="border mt-4 w-3/4 h-12" type="text" placeholder="Enter phone number"/>
          <p className="mt-3 text-xs">By tapping Get started, you agree to the Terms & Conditions</p>
          <button className="mt-30 mb-5 border rounded-xl w-3/4 bg-gray-600 text-white h-10">Get Started</button>
      </>
  )
}

export default page