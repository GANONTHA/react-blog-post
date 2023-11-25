import React from "react";
import { useState } from "react";
import { usePostContext } from "../Context/PostProvider";
import { Link, useNavigate } from "react-router-dom";

const PostBlog = () => {
  const { addPost } = usePostContext();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const navigate = useNavigate();

  //REDIRECT TO THE HOME PAGE AFTER CLICKING THE BUTTON
  const navigateHome = (e) => {
    handleSubmit(e);
    navigate("/");
  };

  //function to format time
  function getTime() {
    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);
    return today.toUTCString();
  }
  //HANDLING SUBMIT
  function handleSubmit(e) {
    e.preventDefault();
    const newPost = {
      id: Math.floor(Math.random() * 10000),
      title,
      content,
      author,
      like: 0,
      time: getTime(),
    };

    addPost(newPost);
    setAuthor("");
    setTitle("");
    setContent("");
  }
  return (
    <div className="add-post">
      <h2>Create a new post</h2>
      <form onSubmit={handleSubmit}>
        <fieldset className="fields">
          <div className="post-title">
            <label htmlFor="post-title">Title</label>
            <input
              type="text"
              id="post-title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="post-content">
            <label htmlFor="post-content">Content</label>
            <input
              type="text"
              id="post-content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
          <div className="author-name">
            <label htmlFor="author-name">Author</label>
            <input
              type="text"
              id="author-name"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </div>

          <button
            disabled={!title}
            type="submit"
            className="publish-post"
            onClick={(e) => navigateHome(e)}
          >
            Post
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default PostBlog;
