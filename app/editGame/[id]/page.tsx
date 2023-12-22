import EditGameForm from "@/components/EditGameForm";

export default async function EditGame({ params }: any) {
  const getGameById = async (id: any) => {
    try {
      const res = await fetch(`http://localhost:3000/api/games/${id}`, {
        cache: "no-store",
      });

      if (!res.ok) throw new Error("Failed to get game");

      return res.json();
    } catch (error) {
      console.log(error);
    }
  };
  const { id } = params;
  const { game } = await getGameById(id);
  const { name, srcGame, srcThumbnail, key } = game;

  return (
    <EditGameForm
      name={name}
      srcGame={srcGame}
      srcThumbnail={srcThumbnail}
      key={key}
    />
  );
}
