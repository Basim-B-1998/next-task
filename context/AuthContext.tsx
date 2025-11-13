"use client";

import {useState,useEffect } from "react";
import { createContext } from "react";

type AuthContextType = {
  token:string|null,
  login:(token:string)=>void,
  logout:()=>void
}

export const AuthContext = createContext<AuthContextType|null>(null)

export const AuthProvider =({children}:{children:React.ReactNode}) =>{

  const [token,setToken]=useState<string | null>(null)
    
        
      useEffect(() => {
        const present = localStorage.getItem("token")
        if (present) {
          setTimeout(()=>setToken(present), 0)
        }
      }, []
    )

    const login = (newToken:string) => {
      localStorage.setItem("token",newToken)
      setToken(newToken)
    }

    const logout = () => {
      localStorage.removeItem("token")
      setToken(null)
    } 

  return (
    <AuthContext.Provider value={{token,login,logout}}>
      {children}
    </AuthContext.Provider> 
  )
  }

  