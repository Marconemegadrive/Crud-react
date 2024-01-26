import blogFetch from "../axios/config";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

interface Post {
  id: number;
  title: string;
  body: string;
}

const Home = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  const getPosts = async () => {
    try {
      const response = await blogFetch.get<Post[]>("/posts");
      const data = response.data;
      setPosts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="Home">
      <h1>Últimos posts</h1>
      {posts.length === 0 ? (
        <p>Carregando...</p>
      ) : (
        posts.map((post) => (
          <div className="post" key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <Link to={`/posts/${post.id}`} className="btn">
              Ler mais
            </Link>
          </div>
        ))
      )}
    </div>
  );
};

export default Home;

