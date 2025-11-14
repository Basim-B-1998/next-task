import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

export async function POST(req:Request){
  
  const data = await req.formData();
  const name  = data.get("fullName") as string;
  const email = data.get("email") as string;
  const qualification = data.get("qualification") as string;
  const profile_image = data.get("profile_image") as File | null;

  const mobile = data.get("mobile") as string;

  const user = {
      id: "111",
      mobile,
      name ,
      email,
      qualification,
      profile_image,
    };

  const access_token = jwt.sign(
    {id:user.id,
      mobile:user.mobile
    },
    "Access_Token_Secret",
    {expiresIn:"2h"}
  )

  const refresh_token = jwt.sign(
    {id:user.id,
      mobile:user.mobile
    },
    "Refresh_Token_Secret",
    {expiresIn:"2d"}
  )

  return NextResponse.json({
    success:true,
    access_token,
    refresh_token,
    message: `Profile created for ${name}`,
    user
  })
}