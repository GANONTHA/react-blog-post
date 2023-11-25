import React from "react";
import MainPage from "../Pages/MainPage";
import PostBlog from "../Pages/PostBlog";
import About from "../Pages/About";
import { Routes, Route, Link } from "react-router-dom";
import "../../style.css";
import SearchBar from "./SearchBar";
import PostDetails from "../Pages/PostDetails";

const Blog = () => {
  return (
    <div className="blog">
      <nav className="title">
        <SearchBar />
        <Link to="/" className="link">
          <li> Home</li>
        </Link>
        <Link to="/post" className="link">
          <li> Create Post</li>
        </Link>
        <Link to="/about" className="link">
          <li>About</li>
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/post" element={<PostBlog />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/post-details" element={<PostDetails />}></Route>
      </Routes>
    </div>
  );
};

export default Blog;
