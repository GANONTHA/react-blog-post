import React from "react";
import { useState } from "react";
import { usePostContext } from "../../BLOG/Context/PostProvider";

const SearchBar = () => {
  const [text, setText] = useState("");
  const { search } = usePostContext();

  function handleClick(searchTerm) {
    search(searchTerm);
    setText("");
  }
  return (
    <div className="searchBox">
      <input
        type="text"
        value={text}
        placeholder="search..."
        onChange={(e) => setText(e.target.value)}
      />{" "}
      <p disable={!text} onClick={() => handleClick(text)}>
        search
      </p>
    </div>
  );
};

export default SearchBar;
