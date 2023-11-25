import React from "react";
import Post from "../components/Post";
import { usePostContext } from "../Context/PostProvider";

const MainPage = () => {
  const { posts } = usePostContext();
  return (
    <div>
      {posts.length > 0
        ? posts.map((post) => <Post key={post.id} post={post} />)
        : "No post found!"}
    </div>
  );
};

export default MainPage;
