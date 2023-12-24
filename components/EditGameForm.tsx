"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import getURL from "@/utils/getURL";

export default function EditGameForm({
  id,
  name,
  srcGame,
  srcThumbnail,
  key,
}: any) {
  const [newName, setNewName] = useState(name);
  const [newSrcGame, setNewSrcGame] = useState(srcGame);
  const [newSrcThumbnail, setNewSrcThumbnail] = useState(srcThumbnail);
  const [newKey, setNewKey] = useState(key);

  const router = useRouter();

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    try {
      let urlFetch =
        `http://localhost:3000/api/games/${id}` || getURL(`/api/games/${id}`);

      const res = await fetch(urlFetch, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ newName, newSrcGame, newSrcThumbnail, newKey }),
      });

      if (!res.ok) {
        throw new Error("Failed to updated game");
      } else {
        router.push("/games");
        router.refresh();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        onChange={(e) => setNewName(e.target.value)}
        value={newName}
        className="border rounded-lg border-slate-500 px-8 py-2"
        type="text"
        placeholder="Name"
      />

      <input
        onChange={(e) => setNewSrcGame(e.target.value)}
        value={newSrcGame}
        className="border rounded-lg border-slate-500 px-8 py-2"
        type="text"
        placeholder="Src Game"
      />

      <input
        onChange={(e) => setNewSrcThumbnail(e.target.value)}
        value={newSrcThumbnail}
        className="border rounded-lg border-slate-500 px-8 py-2"
        type="text"
        placeholder="Src Thumbnail"
      />

      <input
        onChange={(e) => setNewKey(e.target.value)}
        value={newKey}
        className="border rounded-lg border-slate-500 px-8 py-2"
        type="text"
        placeholder="Key"
      />

      <Button className="bg-green-600 font-bold text-white py-3 px-6 w-fit">
        Update Game
      </Button>
    </form>
  );
}
