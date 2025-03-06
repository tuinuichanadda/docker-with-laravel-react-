// components/PostList.tsx
import { FC } from "react";

interface Post {
  id: number;
  title: string;
  content: string;
}

interface PostListProps {
  posts: Post[];
  handleDelete: (id: number) => void;
}

const PostList: FC<PostListProps> = ({ posts, handleDelete }) => {
  return (
    <div className="list-group">
      {posts.map((post) => (
        <div key={post.id} className="list-group-item d-flex justify-content-between align-items-center">
          <div>
            <h5>{post.title}</h5>
            <p>{post.content}</p>
          </div>
          <button
            className="btn btn-danger"
            onClick={() => handleDelete(post.id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default PostList;
