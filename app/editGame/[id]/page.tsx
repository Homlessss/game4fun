import EditGameForm from "@/components/EditGameForm";
import getURL from "@/utils/getURL";

// export default async function EditGame({ params }: any) {
//   const getGameById = async (id: any) => {
//     try {

//       let urlFetch =
//       `http://localhost:3000/api/games/${id}` || getURL(`/api/games/${id}`);

//       const res = await fetch(urlFetch, {
//         cache: "no-store",
//       });

//       if (!res.ok) throw new Error("Failed to get game");

//       return res.json();
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   const { id } = params;
//   const { game } = await getGameById(id);
//   const { name, srcGame, srcThumbnail, key } = game;

//   return (
// <EditGameForm
//   name={name}
//   srcGame={srcGame}
//   srcThumbnail={srcThumbnail}
//   key={key}
// />
//   );
// }

export async function generateStaticParams() {
  let urlGenerator = "http://localhost:3000/api/games" || getURL("/api/games");

  const res = await fetch(urlGenerator);
  const data = await res.json();

  // console.log(data);

  return data.games.map((game: any) => ({
    id: game.id,
  }));
}

export default async function EditGame(params: any) {

  const getGameById = async (id: any) => {
    try {
      let urlFetch =
        `http://localhost:3000/api/games/${id}` || getURL(`/api/games/${id}`);
  
      const res = await fetch(urlFetch, {
        cache: "no-store",
      });
  
      if (!res.ok) throw new Error("Failed to fetch");
  
      return res.json();
    } catch (error) {
      console.log(error);
    }
  };

  const game = await getGameById(params.params.id);
  console.log("id ",params.params.id)
  console.log("game ",game);
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
