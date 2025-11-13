import { NextResponse } from "next/server"
import jwt from 'jsonwebtoken'

export async function POST(req: Request){
  const res = await req.formData()
  const otp = res.get("otp")
  if(otp === '123456'){
    const access_token = jwt.sign({user:"user"},"secret",{expiresIn:"2h"})
    const refresh_token = jwt.sign({user:"user"},"refresh_secret",{expiresIn:"2d"})
  return NextResponse.json({
    success:true,
    login:true,
    message: `otp verified successfully`,
    access_token,
    refresh_token,
    token_type:"Bearer"
  })
}
return NextResponse.json({message:`Invalid otp`,success:false})
}