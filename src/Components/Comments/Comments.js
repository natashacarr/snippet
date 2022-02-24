import React from "react";
import "../Comments/Comments.css";

const Comments = (props) => {
  return (
    <div className="comment">
      <p className="comment-text">{props.commentText}</p>
      <p className="comment-author">{props.commentAuthor}</p>
    </div>
  );
};

export default Comments;
