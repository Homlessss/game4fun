import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";

export default function GamesList() {
  return (
    <div className="col-start-1 col-end-7 my-1">
      <div className="p-4 border border-slate-300 my-3 grid grid-col-6 gap-5">
        <div>
          <h1>Name</h1>
          <h3>Src Game</h3>
          <h3>Src Thumbnail</h3>
          <h3>Key</h3>
        </div>

        <div className="grid col-span-1 col-end-7 content-center">
          <RemoveBtn />
          <Link className="flex justify-center" href={"/editGame/123"}>
            <HiPencilAlt size={24} />
          </Link>
        </div>
      </div>
    </div>
  );
}
