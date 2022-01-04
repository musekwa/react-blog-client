import React, { useState, useEffect } from "react";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./home.css";
import axios from "axios";
import { useLocation } from "react-router";

function Home() {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();
  
  useEffect(() => {
    const fetchPosts = () => {
      axios
        .get("http://localhost:5000/posts"+search)
        .then((res) => setPosts(res.data))
        .catch((err) => console.log("Couldn't fetch any post"));
    };
    fetchPosts();
  }, [search]);

  return (
    <>
      <Header />
      <div className="home">
        <div className="homePostsWrapper">
          <Posts posts={posts} />
        </div>
        <Sidebar />
      </div>
    </>
  );
}

export default Home;
