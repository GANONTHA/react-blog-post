import React, { useContext, useState } from "react";
import { createContext } from "react";
import POSTS from "../AllPosts";

const PostContext = createContext(undefined);
const PostProvider = ({ children }) => {
  //STATES: HOOKS
  const [posts, setPosts] = useState(POSTS);
  const [postDetails, setPostDetails] = useState([]);
  //add a new post to the posts
  function addPost(post) {
    setPosts([...posts, post]);
  }
  //remove a post from the blog
  function deletePost(id) {
    const exist = posts.find((post) => post.id === id);
    setPosts(posts.filter((post) => post.id != exist.id));
  }
  //display details about a post

  function displayDetails(id) {
    const post = posts.find((thepost) => thepost.id === id);
    setPostDetails([post]);
  }
  //like a post
  function likePost(id) {
    const exist = posts.find((post) => post.id === id);

    if (exist.like > 0) {
      setPosts(
        posts.map((post) =>
          post.id === exist.id ? { ...exist, like: exist.like + 1 } : post
        )
      );
    } else {
      const newPost = posts.find((post) => post.id === id);

      setPosts(
        posts.map((post) =>
          post.id === newPost.id ? { ...newPost, like: 1 } : post
        )
      );
    }
  }
  //search for a post by author's name

  function search(name) {
    setPosts(
      posts.filter((post) =>
        post.author.toLocaleLowerCase().includes(name.toLocaleLowerCase())
      )
    );
  }

  return (
    <PostContext.Provider
      value={{
        posts,
        addPost,
        deletePost,
        displayDetails,
        postDetails,
        likePost,
        search,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};

export const usePostContext = () => useContext(PostContext);
export default PostProvider;
