/* eslint-disable react/jsx-key */
import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";

const getGames = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/games", {
      cache: "no-store",
    });

    if (!res.ok) throw new Error("Couldn't get games");

    return res.json();
  } catch (error) {
    console.log("Error loading games: ", error);
  }
};

export default async function GamesList() {
  const { games } = await getGames();

  return (
    <div className="col-start-1 col-end-7 my-1">
      {games.map((g: any) => (
        <div className="p-4 border border-slate-300 my-3 grid grid-col-6 gap-5" key={g.key}>
          <div>
            <h1>{g.name}</h1>
            <h3>{g.srcGame}</h3>
            <h3>{g.srcThumbnail}</h3>
            <h3>{g.key}</h3>
          </div>

          <div className="grid col-span-1 col-end-7 content-center">
            <RemoveBtn id={g._id} />
            <Link className="flex justify-center" href={`/editGame/${g._id}`}>
              <HiPencilAlt size={24} />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
