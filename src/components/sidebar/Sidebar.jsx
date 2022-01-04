import axios from "axios";
import React, { useState, useEffect } from "react";
import "./sidebar.css";
import { Link } from 'react-router-dom';

function Sidebar() {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = ()=>{
      axios.get("http://localhost:5000/categories")
        .then(res=>{
          return setCategories(res.data);
        })
        .catch(err=>console.log("Couldn't fetch categories"))
    }
    getCategories();
  }, []);
  
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img className="sidebarImg" src="./profile-picture.jpg" alt="" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {categories.map((category, key) => (
            <Link key={key} className="link" to={`/?cat=${category.name}`}>
              <li key={key} className="sidebarListItem">
                {category.name}
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
