import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { busca } from "../../api/api";
import "./style.css";

function Post() {
  const { id } = useParams();
  let history = useHistory();
  const [post, setPost] = useState({});

  useEffect(() => {
    busca(`/posts/${id}`, setPost)
    .catch(() => {
      history.push("/404");
    });
  }, [id]);

  return (
    <section>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </section>
  );
}
export default Post;
