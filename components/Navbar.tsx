import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-green-800 px-8 py-3">
      <Link className="text-white font-bold text-2xl" href={"/"}>GameChill.</Link>
    </nav>
  )
}