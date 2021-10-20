import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { busca } from "../../api/api";
import "./style.css";

function Post() {
  const { id } = useParams();
  const [post, setPost] = useState({});

  useEffect(() => {
    busca(`/posts/${id}`, setPost);
    console.log("post: ", post);
  }, [id]);

  return (
    <section>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </section>
  );
}
export default Post;
