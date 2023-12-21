import connectMongoDB from "@/libs/mongodb";
import Game from "@/models/game";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: Request) {
  const { name, srcGame, srcThumbnail, key } = await req.json();
  await connectMongoDB();
  await Game.create({ name, srcGame, srcThumbnail, key });
  return NextResponse.json({ message: "Success" }, { status: 201 });
}

export async function GET() {
  await connectMongoDB();
  const games = await Game.find();
  return NextResponse.json({ games });
}

export async function DELETE(req: NextRequest) {
  const key = req.nextUrl.searchParams.get("key");
  console.log(key);
  await connectMongoDB();
  await Game.findOneAndDelete({key: key});
  return NextResponse.json({ message: "Delete" }, { status: 200 });
}