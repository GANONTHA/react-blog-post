import React from "react";
import { usePostContext } from "../Context/PostProvider";
import Post from "../components/Post";
import { useNavigate } from "react-router-dom";

const PostDetails = () => {
  const { postDetails, deletePost } = usePostContext();
  const navigate = useNavigate();

  function navigateHome(id) {
    navigate("/");
    deletePost(id);
  }

  return (
    <div>
      {postDetails.map((post) => (
        <>
          <Post key={post.id} post={post} />
          <button onClick={() => navigateHome(post.id)} className="deleteBtn">
            DeletePost
          </button>
        </>
      ))}
    </div>
  );
};

export default PostDetails;
