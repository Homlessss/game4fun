import Link from "next/link";
import Image from "next/image";
import getURL from "@/utils/getURL";

const getGames = async () => {
  try {
    let urlFetch = `http://localhost:3000/api/games` || getURL(`/api/games`);

    const res = await fetch(urlFetch, {
      cache: "no-store",
    });

    if (!res.ok) throw new Error("Couldn't get games");

    return res.json();
  } catch (error) {
    console.error("Error loading game: ", error);
  }
};

export default async function Content() {
  const { games } = await getGames();

  return (
    <div className="grid grid-cols-6">
      {games.map((g: any) => (
        <div key={g.key}>
          <Link href={`playGame/${g._id}`}>
            <Image src={`${g.srcThumbnail}`} width={300} height={300} alt="" />
          </Link>
        </div>
      ))}
    </div>
  );
}
