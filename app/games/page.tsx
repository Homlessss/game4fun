import GamesList from "@/components/GamesList";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-cols-6 items-center">
      <Button asChild className="max-w-3xl mx-auto col-start-3 col-span-2 mb-3">
        <Link href={"/addGame"}>Add Game</Link>
      </Button>
      <GamesList />
    </div>
  );
}
