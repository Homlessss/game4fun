import getURL from "@/utils/getURL";

export default async function PlayGame({ params }: any) {
  const getGameById = async (id: any) => {
    try {
      let urlFetch =
        `http://localhost:3000/api/games/${id}` || getURL(`/api/games/${id}`);

      const res = await fetch(urlFetch, {
        cache: "no-store",
      });

      // console.log(getURL(`/api/games/${id}`));

      if (!res.ok) throw new Error("Failed!");

      return res.json();
    } catch (error) {
      console.log(error);
    }
  };

  const { id } = params;
  const { game } = await getGameById(id);
  const { srcGame } = game;

  return <iframe width={1000} height={1000} src={srcGame}></iframe>;
}
