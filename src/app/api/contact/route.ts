export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';

import { NextResponse } from "next/server";
import prisma from "@/lib/prisma"; 

export async function POST(req: Request) {
  try {
    // 1. Request body parse karein
    const body = await req.json();
    const { name, email, message } = body;

    // 2. Data validation
    if (!name || !email || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    // 3. Database entry (Prisma logic)
    const contact = await prisma.contact.create({
      data: { name, email, message },
    });

    return NextResponse.json({ success: true, data: contact });
  } catch (error) {
    // Error logging for Vercel
    console.error("Contact API Error:", error);
    
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." }, 
      { status: 500 }
    );
  }
}