"use client";

import getURL from "@/utils/getURL";
import { useRouter } from "next/navigation";
import { HiOutlineTrash } from "react-icons/hi";

export default function RemoveBtn(id: any) {
  const router = useRouter();
  const removeGame = async () => {
    const confirmed = confirm("Are you sure?");

    if (confirmed) {
      let urlFetch =
        `http://localhost:3000/api/games?id=${id.id}` ||
        getURL(`/api/games?id=${id.id}`);

      const res = await fetch(urlFetch, {
        method: "DELETE",
      });

      if (res.ok) router.refresh();
    }
  };

  return (
    <button
      onClick={removeGame}
      title="delete"
      className="text-red-400 flex justify-center"
    >
      <HiOutlineTrash size={24} />
    </button>
  );
}
