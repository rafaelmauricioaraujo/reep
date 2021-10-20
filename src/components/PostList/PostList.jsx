import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import { busca } from "../../api/api";

function PostList({ url }) {
  const [posts, setPost] = useState([]);

  useEffect(() => {
    busca(url, setPost);
  }, []);

  return (
    <section>
      {posts.map((post) => {
        return (
          <Link to={`/posts/${post.id}`}>
            <article key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </article>
          </Link>
        );
      })}
    </section>
  );
}

export default PostList;
