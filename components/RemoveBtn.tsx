import { HiOutlineTrash } from "react-icons/hi";

export default function RemoveBtn() {
  return (
    <button className="text-red-400 flex justify-center">
      <HiOutlineTrash size={24} />
    </button>
  );
}
