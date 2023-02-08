import React from "react";
import HtmlParser from "react-html-parser";
import { useHistory } from "react-router-dom";
import { getFormattedDate } from "../../utils";
import AuthorDetails from "../components/AuthorDetails";

function Post({ post }) {
  const {
    id,
    date,
    title: { rendered: title },
    excerpt: { rendered: excerpt },
    jetpack_featured_media_url: image,
    parselyMeta: { ["parsely-author"]: author },
  } = post;
  const history = useHistory();

  const handlePostClick = () => {
    history.push(`/posts/${id}`);
  };

  return (
    <div className="post" onClick={handlePostClick}>
      <img src={image} alt="title" className="post_image"></img>
      <h3 className="post_title">{HtmlParser(title)}</h3>
      <p className="post_description">{HtmlParser(excerpt)}</p>
      <AuthorDetails authorName={author[0]} date={date} />
    </div>
  );
}

export default Post;
