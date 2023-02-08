import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import HtmlParser from "react-html-parser";
import { HiArrowNarrowLeft } from "react-icons/hi";
import "./index.css";
import AuthorDetails from "../components/AuthorDetails";
const data_url = "https://techcrunch.com/wp-json/wp/v2/posts";

function Post() {
  const history = useHistory();
  const { id } = useParams();
  const [post, setPost] = useState({
    date: "",
    title: "",
    content: "",
    image: "",
    author: "",
  });
  const { date, title, content, image, author } = post;
  const [isLoading, setIsLoading] = useState(false);
  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(`${data_url}/${id}`);
      if (response) {
        const postData = response.data;
        setPost({
          date: postData["date"],
          title: postData["title"]["rendered"],
          content: postData["content"]["rendered"],
          image: postData["jetpack_featured_media_url"],
          author: postData["parselyMeta"]["parsely-author"][0],
        });
        setIsLoading(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  console.log(content);

  useEffect(() => {
    fetchData();
  }, []);

  const handleClickBack = () => {
    history.push("/posts");
  };

  return (
    <div>
      {isLoading ? (
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      ) : (
        <div className="full-post__container">
          <div className="full-post__header" onClick={handleClickBack}>
            <HiArrowNarrowLeft color="white" size={30} />
            <h1 style={{ marginLeft: "8px" }}>Posts</h1>
          </div>
          <img src={image} alt={title} className="full-post__image" />
          <AuthorDetails authorName={author} date={date} />
          <h1 className="full-post__title">{HtmlParser(title)}</h1>
          <div className="full-post__content">{HtmlParser(content)}</div>
        </div>
      )}
    </div>
  );
}

export default Post;
