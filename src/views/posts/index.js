import React, { useEffect, useState } from "react";
import axios from "axios";
import Post from "./Post";

const data_url =
  "https://techcrunch.com/wp-json/wp/v2/posts?per_page=20&context=embed";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(data_url);
      if (response) {
        const sortedPosts = response.data.sort(
          (p1, p2) => Date.parse(p2["date"]) - Date.parse(p1["date"])
        );
        setPosts(sortedPosts);
        setIsLoading(false);
      }
    } catch (err) {
      console.log(err);
    }
  };
  console.log(posts);

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="container">
      <h1 style={{ marginBottom: "24px" }}>Blogs</h1>
      {isLoading ? (
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      ) : (
        <>
          {posts.length > 0 ? (
            <div className="posts">
              {posts.map((post, index) => {
                return <Post post={post} key={index} />;
              })}
            </div>
          ) : (
            <h3>There are no posts available. Please try after some time...</h3>
          )}
        </>
      )}
    </div>
  );
}

export default Posts;
