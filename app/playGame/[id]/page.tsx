export default async function PlayGame({ params }: any) {
  const getGameById = async (id: any) => {
    try {
      const res = await fetch(`http://localhost:3000/api/games/${id}`, {
        cache: "no-store",
      });

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
