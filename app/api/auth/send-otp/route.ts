import { NextResponse } from "next/server";


export async function POST(req: Request) {

  const data = await req.formData();
  const mobile = data.get("mobile");
  return NextResponse.json({
    success: true,
    message: `OTP sent to ${mobile}`});
}