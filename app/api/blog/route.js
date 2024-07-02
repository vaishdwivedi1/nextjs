import { connectionStr } from "@/app/lib/db";
import { dbblog } from "@/app/lib/blogModel";
import mongoose from "mongoose";
import { NextResponse, NextRequest } from "next/server";

export async function POST(request) {
  const payload = await request.json();
  let success = false;
  await mongoose.connect(connectionStr);
  const user = new dbblog(payload);
  const result = await user.save();
  if (result) {
    success = true;
  }

  return NextResponse.json({ result, success });
}

export async function GET() {
  await mongoose.connect(connectionStr);
  const data = await dbblog.find();
  return NextResponse.json({ result: data });
}


