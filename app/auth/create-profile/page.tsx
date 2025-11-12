import React from 'react'


const page = () => {
  return (
    <>
       <p className="text-2xl mt-4 font-bold">Add Your Details</p>
       <input type="file" id="upload" className="hidden"/>
       <label htmlFor="upload" className="border border-dashed text-xs p-5 mt-3 ml-15">Add Your Profile picture</label>
       <input className="border mt-4 w-3/4 h-12" type="text" placeholder="Enter your Full Name"/>
       <input className="border mt-4 w-3/4 h-12" type="text" placeholder="Enter your Email Address"/>
       <input className="border mt-4 w-3/4 h-12" type="text" placeholder="Enter your Qualification"/>
       <button className="mt-5 mb-5 border rounded-xl w-3/4 bg-gray-600 text-white h-10">Get Started</button>
    </>
  )
}


export default page