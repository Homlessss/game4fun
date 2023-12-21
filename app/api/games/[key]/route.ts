import connectMongoDB from "@/libs/mongodb";
import Game from "@/models/game";
import { NextResponse } from "next/server";

export async function PUT(req: Request, { params }: any) {
  const { keyGame } = params;
  const { newName: name, newSrcGame: srcGame, newSrcThumbnail: srcThumbnail, newKey: key } = await req.json();
  await connectMongoDB();
  await Game.findOneAndUpdate(keyGame, { name, srcGame, srcThumbnail, key });
  return NextResponse.json({ message: "Updated successfully" }, { status: 200 });
}

export async function GET(req: Request, { params }: any) {
  const { key } = params;
  await connectMongoDB();
  const game = await Game.findOne({ key: key });
  return NextResponse.json({ game }, { status: 200 });
}
