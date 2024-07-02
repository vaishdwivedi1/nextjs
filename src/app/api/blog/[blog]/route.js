import { connectionStr } from "@/app/lib/db";
import { dbblog } from "@/app/lib/blogModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";


export async function GET(request, { params }) {
  const { blog } = params;
  await mongoose.connect(connectionStr);
  const data = await dbblog.findOne({ _id: blog });
  return NextResponse.json({ result: data });
}