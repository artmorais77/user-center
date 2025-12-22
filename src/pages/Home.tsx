import { useEffect, useState } from "react";
import { Users } from "lucide-react";
import { Logo } from "../components/Logo";
import { SearchBar } from "../components/SearchBar";
import { UserCard } from "../components/UserCard";
import { api } from "../services/api";
import type { IUser } from "../types/User";
import { useDebounce } from "../hooks/useDebounce";
import { Loading } from "../components/Loading";
import { Error } from "../components/Error";

export function Home() {
  const [users, setUsers] = useState<IUser[] | null>(null)
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const debouncedSearchTerm = useDebounce(searchTerm, 500)
  
  const filter = users?.filter((user) => 
    user.name.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
)

  async function getUsers() {
    try {
      setLoading(true)
      const response = await api.get("/users")
      setUsers(response.data)
    } catch (error) {
      console.error("Erro ao carregar usuários:", error)
      setUsers([])
    } finally {
      setLoading(false)
    }
  } 

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <div className="m-3 gap-3 min-w-80 md:min-w-2xl xl:min-w-6xl">
      <header className="bg-white p-3 rounded-sm grid grid-cols-1 xl:grid-cols-3 justify-between shadow">
        <Logo />
        <SearchBar onSearch={setSearchTerm}/>
        <div></div>
      </header>

      <main className="mt-3">
        {loading ? (
          <Loading message="Carregando usuários..."/>
        ) : filter && filter.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
            {filter.map((user) => (
              <UserCard key={user.id} user={user}/>
            ))}
          </div>
        ) : (
          <Error icon={Users} title="Nenhum usuário encontrado" description={searchTerm 
                ? `Nenhum usuário encontrado para "${searchTerm}".`
                : "Não foi possível encontrar usuários no momento. Tente novamente mais tarde."
              }/>
        )}
      </main>
    </div>
  );
}