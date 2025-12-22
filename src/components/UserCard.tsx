import { Mail, MapPin} from "lucide-react"
import { useNavigate } from "react-router"
import type { IUser } from "../types/User"

interface IUserCardProps {
  user: IUser
}

export function UserCard({user}: IUserCardProps) {
  const navigate = useNavigate()

  function handlerViewProfile() {
    navigate(`/details/${user.id}`)
  }
  return (
    <div className="bg-white rounded-lg p-3 shadow">
      <h1 className="text-xl font-bold">{user.name}</h1>
      <p className="text-sm font-semibold text-indigo-600">{`@${user.username}`}</p>
      
      <div className="flex justify-start items-center gap-1 mt-2">
        <Mail className="w-4 h-4 text-gray-500"/>
        <p className="text-sm text-gray-500">{user.email}</p>
      </div>
      <div className="flex justify-start items-center gap-1">
        <MapPin className="w-4 h-4 text-gray-500"/>
        <p className="text-sm text-gray-500">{`${user.address.street} - ${user.address.city}, ${user.address.zipcode}`}</p>
      </div>
      <button 
        className="overflow-hidden flex justify-center items-center border p-1 rounded-md w-full mt-2 cursor-pointer hover:opacity-[0.6] active:opacity-[0.4]"
        onClick={handlerViewProfile}
      >
        Ver perfil
      </button>
    </div>
  )
}