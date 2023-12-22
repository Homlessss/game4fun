import connectMongoDB from "@/libs/mongodb";
import Game from "@/models/game";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: Request) {
  const { name, srcGame, srcThumbnail, id } = await req.json();
  await connectMongoDB();
  await Game.create({ name, srcGame, srcThumbnail, id });
  return NextResponse.json({ message: "Success" }, { status: 201 });
}

export async function GET() {
  await connectMongoDB();
  const games = await Game.find();
  return NextResponse.json({ games });
}

export async function DELETE(req: NextRequest) {
  const id = req.nextUrl.searchParams.get("id");
  console.log(id);
  await connectMongoDB();
  await Game.findByIdAndDelete(id);
  return NextResponse.json({ message: "Delete" }, { status: 200 });
}