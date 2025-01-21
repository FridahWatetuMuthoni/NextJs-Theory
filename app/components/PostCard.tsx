import { PostProps } from "./Post";

function PostCard({ post }: { post: PostProps }) {
  return (
    <div className="shadow-lg p-5 m-5 w-72 h-auto">
      <h1 className="text-3xl mb-2">{post.title}</h1>
      <p className="leading-6">{post.body}</p>
    </div>
  );
}

export default PostCard;
