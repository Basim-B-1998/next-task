import Image from "next/image";

export default function Layout({children}: {children:React.ReactNode}){
  return (
      <div className='flex items-center justify-center w-full min-h-screen border bg-indigo-950'>
        <div className='flex w-3/4 max-w-4xl border bg-white rounded-2xl'>
          <div className="w-1/2 flex flex-col items-center justify-center relative">
            <Image src="/img1.png" alt="img" fill/>
          </div>
           <div className="w-1/2 flex flex-col items-center justify-center items-start pl-20">
            {children}
          </div>
        </div>
      </div>
  )
}
