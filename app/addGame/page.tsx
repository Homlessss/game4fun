"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useRouter } from "next/navigation";
import getURL from "@/utils/getURL";

export default function AddGame() {
  const [name, setName] = useState("");
  const [srcGame, setSrcGame] = useState("");
  const [srcThumbnail, setSrcThumbnail] = useState("");
  const [key, setKey] = useState("");

  const router = useRouter();

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (!name || !srcGame || !srcThumbnail || !key) {
      alert("Please enter");
      return;
    }

    try {
      let urlFetch = `http://localhost:3000/api/games` || getURL(`/api/games`);

      const res = await fetch(urlFetch, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, srcGame, srcThumbnail, key }),
      });

      if (res.ok) {
        router.push("/games");
        router.refresh();
      } else {
        throw new Error("Failed to create a game");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        onChange={(e) => setName(e.target.value)}
        value={name}
        className="border rounded-lg border-slate-500 px-8 py-2"
        type="text"
        placeholder="Name"
      />

      <input
        onChange={(e) => setSrcGame(e.target.value)}
        value={srcGame}
        className="border rounded-lg border-slate-500 px-8 py-2"
        type="text"
        placeholder="Src Game"
      />

      <input
        onChange={(e) => setSrcThumbnail(e.target.value)}
        value={srcThumbnail}
        className="border rounded-lg border-slate-500 px-8 py-2"
        type="text"
        placeholder="Src Thumbnail"
      />

      <input
        onChange={(e) => setKey(e.target.value)}
        value={key}
        className="border rounded-lg border-slate-500 px-8 py-2"
        type="text"
        placeholder="Key"
      />

      <Button
        type="submit"
        className="bg-green-600 font-bold text-white py-3 px-6 w-fit"
      >
        Add Game
      </Button>
    </form>
  );
}
