"use client";

import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function Layout({children}:{children:React.ReactNode}){
  const auth = useContext(AuthContext);

  const handleLogout = () => {
    auth?.logout();
    alert("Successfully Logged Out");
    window.location.href = "/auth/send-otp"; 
  };
  return (
    <div>
    <div className='flex p-3 border-b items-center justify-between'>
      <div className='mx-auto'>
        <img src="/navimg.png" alt="logo" />
      </div>
      <div className='border rounded-md py-2 px-5 bg-cyan-700 text-white mr-1'>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
    <div>
      {children}
    </div>
    </div>
  )
}