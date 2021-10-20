import React from "react";
import PostList from "../PostList/PostList";
import Typography from "@material-ui/core/Typography";
import "./style.css";

function Blog() {
  return (
    <section>
      <Typography variant="h3" component="h1">
        Posts
      </Typography>
      <PostList url="/posts"></PostList>
    </section>
  );
}

export default Blog;
