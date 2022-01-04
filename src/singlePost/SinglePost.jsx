import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";
import "./singlePost.css";
import axios from "axios";
import { Link } from 'react-router-dom';
 
function SinglePost() {
  const [post, setPost] = useState({});
  const location = useLocation();
  const path = location.pathname.split("/")[2];
 // console.log('path is here: ', path);

  useEffect(() => {
    const fetchPost = (path) => {
      axios
        .get(`http://localhost:5000/posts/${path}`)
        .then((res) => {
          // console.log("post fetched data: ", res.data)
          setPost(res.data)
        })
        .catch((err) => console.log("Could't fetch the post"));
    };
    fetchPost(path);
  }, [path]);

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {post.photo ? (
          <img src={`/${post.photo}`} alt="" />
        ) : (
          <img src="/post-picture.jpg" alt="" className="singlePostImg" />
        )}

        <h1 className="singlePostTitle">
          {post.title}
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author:
            <Link className="link" to={`/?user=${post.username}`}>
              <b>{post.username}</b>
            </Link>
          </span>
          <span className="singlePostDate">
            {new Date(post.createdAt).toDateString()}
          </span>
        </div>
        <p className="singlePostDesc">{post.desc}</p>
      </div>
    </div>
  );
}

export default SinglePost;
