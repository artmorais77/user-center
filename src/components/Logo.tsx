import { BookUser } from "lucide-react";

export function Logo() {
  return (
    <div className="flex justify-start items-center gap-3">
      <div className="flex justify-center items-center bg-linear-to-r from-violet-600 to-indigo-600 w-12 h-12 rounded-md">
        <BookUser className="w-10 h-10"/>
      </div>
      <div className="flex flex-col justify-center items-center h-12">
        <h1 className="font-bold text-2xl leading-10 h-full">Central</h1>
        <span className="text-sm font-semibold text-indigo-600 uppercase leading-0 h-full">de Usuário</span>
      </div>
    </div>
  );
}
