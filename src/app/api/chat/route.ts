import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json({ error: "Chat assistant has been removed." }, { status: 404 });
}
