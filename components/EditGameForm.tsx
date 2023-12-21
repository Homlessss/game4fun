import { Button } from "./ui/button";

export default function EditGameForm() {
  return (
    <form className="flex flex-col gap-3">
      <input
        className="border rounded-lg border-slate-500 px-8 py-2"
        type="text"
        placeholder="Name"
      />

      <input
        className="border rounded-lg border-slate-500 px-8 py-2"
        type="text"
        placeholder="Src Game"
      />

      <input
        className="border rounded-lg border-slate-500 px-8 py-2"
        type="text"
        placeholder="Src Thumbnail"
      />

      <input
        className="border rounded-lg border-slate-500 px-8 py-2"
        type="text"
        placeholder="Key"
      />

      <Button className="bg-green-600 font-bold text-white py-3 px-6 w-fit">
        Update Game
      </Button>
    </form>
  );
}
