import "./App.css";
import PostProvider from "./BLOG/Context/PostProvider";
import Blog from "./BLOG/components/Blog";

function App() {
  return (
    <PostProvider>
      <Blog />
    </PostProvider>
  );
}

export default App;
