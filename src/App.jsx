import { useState, useEffect } from "react";
import axios from "axios";
import Posts from "./components/Posts";
import Pagination from "./components/Pagination";

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;

  useEffect(() => {
    const fetchposts = async () => {
      setLoading(true);
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setPosts(res.data);
      setLoading(false);
    };

    fetchposts();
  }, []);

  // console.log(posts);

  //To calculate the current page display
  const LastIndex = currentPage * postsPerPage;
  const FirstIndex = LastIndex - postsPerPage;
  const currentPost = posts.slice(FirstIndex, LastIndex);

  //to update the currentPage and current display
  const paginate = (currPageNum) => setCurrentPage(currPageNum);
  return (
    <div className="md:p-12 p-2 font-mono flex flex-col gap-4">
      <h1 className="md:text-2xl text-md font-bold ">
        Learning paging with JSON placeholders
      </h1>
      <Posts posts={currentPost} loading={loading} />
      <Pagination
        totalPageLength={posts.length}
        postsPerPage={postsPerPage}
        paginate={paginate}
      />
    </div>
  );
}

export default App;
