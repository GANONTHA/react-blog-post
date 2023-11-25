import React from "react";
import "../../style.css";
import { useNavigate } from "react-router-dom";
import { usePostContext } from "../Context/PostProvider";

const Post = (props) => {
  const { id, title, content, author, time, like } = props.post;
  const navigate = useNavigate();
  const { displayDetails, likePost } = usePostContext();

  //NAVIGATE TO A POST DETAILS AFTER CLICKING
  function navigateToDetails(id) {
    navigate("/post-details");
    displayDetails(id);
  }
  return (
    <div className="post">
      <div className="postHead" onClick={() => navigateToDetails(id)}>
        <h3> {title}</h3>
      </div>
      <p>{content}</p>
      <footer>
        By {author}{" "}
        <span className="time">
          At{"  "}
          {time.slice(18, 22)}
          {time.slice(18, 19) < 12 ? " AM" : " PM"}
        </span>
      </footer>
      <div className="reactions">
        <p onClick={() => likePost(id)}>Like {Number(like) > 0 && like}</p>
        <p>Share</p>
      </div>
    </div>
  );
};

export default Post;
