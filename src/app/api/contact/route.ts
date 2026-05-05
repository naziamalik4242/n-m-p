export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma"; // Jo file abhi banayi usay import karein

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    const contact = await prisma.contact.create({
      data: { name, email, message },
    });

    return NextResponse.json(contact);
  } catch (error) {
    console.error("Contact API Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}