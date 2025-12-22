import { Building, LucidePhoneCall, Mail, MapPin } from "lucide-react";
import type { IUser } from "../types/User";

interface IUserDetailsProps {
  user: IUser
}

export function UserDetails({ user }: IUserDetailsProps) {

  return (
    <div className="bg-white p-3 rounded-sm mt-3 shadow">
      <div className="border-b border-gray-300 p-3 mb-3">
        <h1 className="text-2xl font-bold">{user.name}</h1>
        <p className="text-base font-semibold text-indigo-600">
          {`@${user.username}`}
        </p>
      </div>
      <div>
        <h3 className="text-bold text-gray-400 text-xs mb-1">CONTATO</h3>
        <div className="flex justify-start items-center gap-1">
          <Mail className="w-4 h-4 text-indigo-600" />
          <p className="text-sm text-gray-700">{user.email}</p>
        </div>
        <div className="flex justify-start items-center gap-1">
          <LucidePhoneCall className="w-4 h-4 text-indigo-600" />
          <p className="text-sm text-gray-700">{user.phone}</p>
        </div>
      </div>
      <div>
        <h3 className="text-bold text-gray-400 text-xs mb-1 mt-3">ENDEREÇO</h3>
        <div className="flex justify-start items-center gap-1">
          <MapPin className="w-4 h-4 text-indigo-600" />
          <p className="text-sm text-gray-700">
            {`${user?.address.street} - ${user?.address.city}, ${user?.address.zipcode}`}
          </p>
        </div>
      </div>
      <div className="bg-indigo-50 flex flex-col p-2 mt-3 rounded-sm">
        <h3 className="text-bold text-gray-400 text-xs mb-1">EMPRESA</h3>
        <div className="flex items-start gap-3">
          <Building className="w-6 h-6 text-indigo-600" />
          <div>
            <p className="text-md font-bold">{user?.company.name}</p>
            <p className="text-sm italic text-gray-500">
              "{user?.company.catchPhrase}"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
