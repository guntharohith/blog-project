import React from "react";
import "./index.css";
import { getFormattedDate } from "../../../utils";

function AuthorDetails({ authorName, date }) {
  return (
    <div className="author_details">
      <img src="/profile_image.png" className="author_image"></img>
      <div>
        <h4 className="author_name">{authorName}</h4>
        <p className="date">{getFormattedDate(date)}</p>
      </div>
    </div>
  );
}

export default AuthorDetails;
