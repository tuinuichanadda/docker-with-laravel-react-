import { useEffect, useState } from "react";
import PostList from "../components/PostList";
import PostForm from "../components/PostForm";
import axios from "axios";

interface Post {
  id: number;
  title: string;
  content: string;
}

const Home: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  const fetchPosts = () => {
    axios
      .get("http://127.0.0.1:8000/api/posts")
      .then((response) => setPosts(response.data))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleDelete = (id: number) => {
    axios
      .delete(`http://127.0.0.1:8000/api/posts/${id}`)
      .then(() => fetchPosts())
      .catch((error) => console.error(error));
  };

  return (
    <div className="container mt-5">
      <h2>Post List</h2>
      <PostForm onPostCreated={fetchPosts} />
      <PostList posts={posts} handleDelete={handleDelete} />
    </div>
  );
};

export default Home;
