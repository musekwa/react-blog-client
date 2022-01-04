import React from "react";
import "./post.css";
import { Link } from 'react-router-dom';

function Post({ post }) {
  return (
    <div className="post">
      {post.photo ? (
        <img className="postImg" src={post.photo} alt="" />
      ) : (
        <img className="postImg" src="./post-picture.jpg" alt="" />
      )}
      <div className="postInfo">
        <div className="postCats">
          {post.categories.map((cat, key) => (
            <span key={key} className="postCat">{cat}</span>
          ))}
        </div>
        <Link to={`/posts/${post._id}`} className="link">
          <span className="postTitle">{post.title}</span>
        </Link>
        <hr />
        <span className="postDate">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className="postDesc">{post.desc}</p>
    </div>
  );
}

export default Post;
