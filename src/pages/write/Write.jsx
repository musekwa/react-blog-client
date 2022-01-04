import React, { useContext, useRef, useState } from "react";
import axios from "axios";
import { Context } from "../../context/Context";
import "./write.css";

function Write() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const { user } = useContext(Context);

  const titleRef = useRef();
  const descRef = useRef();
  const fileRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      title,
      desc,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + "-" + file.name;
      data.append("postImage", filename);
      data.append("file", file);
      newPost.photo = filename; // add the image name to the post document
      try {
        const photo = await axios.post("http://localhost:5000/upload", data);
        console.log('photo:', photo.data);
      } catch (err) {
        console.log("Couldn't upload the file")
      }
      try {
        const res = await axios.post("http://localhost:5000/posts", newPost);
        console.log("new post:",  res.data)
        window.location.replace("/posts/"+res.data._id)
      } catch (err) {
        console.log("Couldn't create the new Post")
      }
    }
  };

  return (
    <div className="write">
      {/* <div className="writeImgContainer"> */}
        {file && (
          <img className="writeImg" src={URL.createObjectURL(file)} alt="" />
        )}
      {/* </div> */}
      <form className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input
            name="image"
            type="file"
            id="fileInput"
            style={{ display: "none" }}
            onChange={(e) => setFile(e.target.files[0])}
          />
          <input
            name="title"
            ref={titleRef}
            type="text"
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
            onChange={(e)=>setTitle(e.target.value)}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            name="desc"
            ref={descRef}
            placeholder="Tell your story..."
            type="text"
            className="writeInput writeText"
            onChange={(e)=>setDesc(e.target.value)}
          />
        </div>
        <button type="submit" className="writeSubmit">
          Publish
        </button>
      </form>
    </div>
  );
}

export default Write;
