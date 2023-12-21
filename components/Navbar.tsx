import Link from "next/link";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { CiSearch } from "react-icons/ci";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-green-800 px-8 py-3">
      <Link className="text-white font-bold text-2xl" href={"/"}>GameChill.</Link>
      <div className="flex w-full max-w-sm space-x-2">
        <Input type="text" placeholder="Nhập tên game"/>
        <Button type="submit"><CiSearch/></Button>
      </div>
    </nav>
  )
}