import { FileText } from "lucide-react";
import type { IPost } from "../types/Post";

interface IUserPostProps {
  posts: IPost[]
}

export function UserPost({ posts }: IUserPostProps) {

  return (
    <div className=" flex flex-col bg-white p-3 rounded-sm mt-3 shadow gap-3">
      <div className="flex justify-between border-b border-gray-300 p-3 mb-3">
        <div className="flex items-center gap-1 ">
          <FileText className="text-indigo-600 w-6 h-6" />
          <h1 className="text-2xl font-bold">Posts</h1>
        </div>
        <div className="flex justify-center items-center rounded-2xl w-8 h-8 bg-indigo-100 text-indigo-700 text-md">
          <p>{posts.length}</p>
        </div>
      </div>

      {posts.map((post: IPost) => (
        <div key={post.id} className="rounded-xl border border-gray-300 p-3">
          <h2 className="text-xl font-semibold">{post.title}</h2>
          <p className="text-base text-gray-600 mt-2">{post.body}</p>
          <p className="text-xs text-gray-400 mt-2">{`Post #${post.id}`}</p>
        </div>
      ))}
    </div>
  );
}
