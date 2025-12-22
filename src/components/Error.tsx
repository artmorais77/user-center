import type { LucideIcon } from "lucide-react";

interface IErrorProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function Error({
  icon: Icon,
  title,
  description,
}: IErrorProps) {
  return (
    <div className="bg-white p-6 md:p-10 rounded-sm shadow flex flex-col items-center justify-center min-h-75 md:min-h-100">
      <div className="bg-indigo-50 rounded-full p-4 md:p-6 mb-4">
        <Icon className="w-12 h-12 md:w-16 md:h-16 text-indigo-300" />
      </div>

      <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-2 text-center">
        {title}
      </h2>

      <p className="text-sm md:text-base text-gray-500 text-center max-w-md mb-4">
        {description}
      </p>
    </div>
  );
}
