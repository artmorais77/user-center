import { ArrowBigLeft, UserX, FileX } from "lucide-react";
import { Logo } from "../components/Logo";
import { useNavigate, useParams } from "react-router";
import { UserDetails } from "../components/UserDetails";
import { useEffect, useState } from "react";
import type { IUser } from "../types/User";
import { api } from "../services/api";
import { UserPost } from "../components/UserPost";
import type { IPost } from "../types/Post";
import { Loading } from "../components/Loading";
import { Error } from "../components/Error";

export function Details() {
  const navigate = useNavigate();
  const [user, setUser] = useState<IUser | null>(null);
  const [posts, setPosts] = useState<IPost[] | null>(null);
  const [loadingUser, setLoadingUser] = useState(true);
  const [loadingPosts, setLoadingPosts] = useState(true);
  const [userError, setUserError] = useState(false);
  const { id } = useParams();

  async function getUser() {
    try {
      setLoadingUser(true);
      setUserError(false);
      const response = await api.get(`/users/${id}`);
      setUser(response.data);
    } catch (error) {
      console.error("Erro ao carregar usuário:", error);
      setUserError(true);
      setUser(null);
    } finally {
      setLoadingUser(false);
    }
  }

  async function getPost() {
    try {
      setLoadingPosts(true);
      const response = await api.get(`/posts?userId=${id}`);
      setPosts(response.data);
    } catch (error) {
      console.error("Erro ao carregar posts:", error);
      setPosts([]);
    } finally {
      setLoadingPosts(false);
    }
  }

  useEffect(() => {
    getUser();
    getPost();
  }, [id]);

  return (
    <div className="m-3 gap-3 min-w-80 md:min-w-2xl xl:min-w-6xl xl:max-w-6xl">
      <header className="flex justify-between bg-white p-3 rounded-sm items-center shadow">
        <Logo />
        <div
          onClick={() => navigate(-1)}
          className="flex gap-1 justify-end items-center cursor-pointer group"
        >
          <ArrowBigLeft className="w-6 h-6 text-indigo-600 group-hover:text-indigo-700 transition-colors" />
          <button className="text-xl font-bold text-indigo-600 group-hover:text-indigo-700 transition-colors">
            Voltar
          </button>
        </div>
      </header>

      {loadingUser ? (
        <Loading message="Carregando informações do usuário..." />
      ) : userError ? (
        <Error
          icon={UserX}
          title="Usuário não encontrado"
          description="Não foi possível carregar as informações deste usuário. Ele pode ter sido removido ou não existe."
        />
      ) : user ? (
        <UserDetails user={user} />
      ) : null}

      {loadingPosts ? (
        <Loading message="Carregando posts..." />
      ) : posts && posts.length > 0 ? (
        <UserPost posts={posts} />
      ) : (
        <Error icon={FileX} title="Nenhum post encontrado" description="Este usuário ainda não publicou nenhum post."/>
      )}
    </div>
  );
}
