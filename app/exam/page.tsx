'use client'
import React from 'react'

const Exam = () => {
  return (
  <div className='bg-cyan-50 w-full min-h-screen'>
    <div className='flex flex-col items-center justify-center'>
      <div className="text-2xl mt-5 font-semibold">
        Ancient Indian History MCQ
    </div>  
    <div className='bg-black text-white mt-5 py-5 flex justify-between items-center rounded-md w-[600px]'>
       <div className='flex flex-col items-center flex-1'>
         <p>Total MCQ’s:</p>
         <span className='text-3xl'>100</span>
       </div>
       <div className='h-20 w-[1px] bg-white'></div>
       <div className='flex flex-col items-center flex-1'>
        <p>Total marks:</p>
        <span className='text-3xl'>100</span>
       </div>
       <div className='h-20 w-[1px] bg-white'></div>
       <div className='flex flex-col items-center flex-1'>
        <p>Total time:</p>
        <span className='text-3xl'>90:00</span>
       </div>
    </div>
    <div className='mt-2'>
    <p className='font-semibold'>Instructions:</p>
    <ul className='flex flex-col mt-2'>
      <li>1. You have 100 minutes to complete the test.</li>
      <li>2.  Test consists of 100 multiple-choice q’s.</li>
      <li>3. You are allowed 2 retest attempts if you do not pass on the first try.</li>
      <li>4.  Each incorrect answer will incur a negative mark of -1/4.</li>
      <li>5.  Ensure you are in a quiet environment and have a stable internet connection.</li>        
      <li>6.  Keep an eye on the timer, and try to answer all questions within the given time.</li>
      <li>7.  Do not use any external resources such as dictionaries, websites, or assistance.</li>
      <li>8.  Complete the test honestly to accurately assess your proficiency level.</li>
      <li>9.  Check answers before submitting.</li>
      <li>10.  Your test results will be displayed immediately after submission, indicating whether <br/><span className='pl-7'>you have passed or need to retake the test.</span></li>
    </ul>
    </div>
    <button onClick={()=>(window.location.href="/exam/mcq")} className='border px-30 py-2 mt-5 bg-cyan-950 text-white rounded-md'>Start Test</button>
    </div>
  </div>
  )
}

export default Exam