import React from "react";
import Post from "../post/Post";
import "./posts.css";

function Posts({ posts }) {
  return (
    <div className="posts">
      {posts.map((post, key) => (
        <Post key={key} post={post} />
      ))}
    </div>
  );
}

export default Posts;
