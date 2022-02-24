import React, { useState } from "react";
import "../Card/Card.css";
import { Animated } from "react-animated-css";
import { getPostComments } from "../../api/reddit";
import Comments from "../Comments/Comments";

const Card = (props) => {
  const [visible, setVisible] = useState(false);
  const [fading, setFading] = useState(false);
  const [comments, setComments] = useState([]);
  const originalPost = "https://www.reddit.com".concat(props.postComments);

  const handleClick = async () => {
    const comments = await getPostComments(props.postComments);
    setComments(comments.children.slice(0, 10));

    if (!visible) {
      setFading(false);
      setVisible(true);
    } else if (visible) {
      setFading(true);
      setTimeout(() => setVisible(false), 100);
    }
  };

  return (
    <div className="card">
      <h1 className="title">{props.postTitle}</h1>
      <p className="subreddit-posted">
        <span>in</span> {props.postSubreddit}
      </p>
      <hr />

      <div>
        {props.postImg && <img className="image" src={props.postImg} alt="" />}
        {props.postText && <p className="content">{props.postText}</p>}
      </div>

      <Animated
        className="content"
        animationIn="fadeIn"
        animationOut="fadeOut"
        animationInDuration={100}
        animationOutDuration={100}
        isVisible={!fading}
        style={visible ? null : { display: "none" }}
      >
        <hr />
        {comments.map((comment) => {
          return (
            <Comments
              className="post-comment"
              key={comment.data.id}
              commentAuthor={comment.data.author}
              commentText={comment.data.body}
            />
          );
        })}
        <hr />
      </Animated>

      <div className="footer">
        <p className="author">
          <span>by</span> {props.postAuthor}
        </p>
        <a className="original-link" href={originalPost} target="blank">
          View in Reddit
        </a>
        <button className="comments-button" onClick={handleClick}>
          {visible ? (
            <p className="button-text">Hide comments</p>
          ) : (
            <p className="button-text">View comments</p>
          )}
        </button>
        <p className="upvotes">{Math.round(props.postUpvote * 100)}% Upvoted</p>
      </div>
    </div>
  );
};

export default Card;
