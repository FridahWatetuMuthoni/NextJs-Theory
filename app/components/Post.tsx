import Link from "next/link";
import PostCard from "./PostCard";

export type PostProps = {
  userId: number;
  id: number;
  title: string;
  body: string;
  message?: string;
};

async function getPosts(): Promise<PostProps[]> {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) {
    throw new Error("failed to fetch");
  }
  return response.json();
}

async function Post() {
  const data = await getPosts();
  return (
    <div className="flex flex-wrap items-center">
      <Link href={"/dashboard"}>Go to Dashboard</Link>
      {data.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}

export default Post;
