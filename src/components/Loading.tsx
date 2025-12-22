import { Loader2 } from "lucide-react";

interface LoadingProps {
  message: string;
}

export function Loading({ message }: LoadingProps) {
  return (
    <div className="bg-white p-6 md:p-12 rounded-sm shadow flex flex-col items-center justify-center min-h-75 md:min-h-100">
      <Loader2 className="w-10 h-10 md:w-12 md:h-12 text-indigo-600 animate-spin mb-4" />
      <p className="text-sm md:text-base text-gray-600 font-medium">
        {message}
      </p>
    </div>
  );
}
