import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getSubreddits } from "../../api/reddit";
import missingIcon from "../SubredditList/missing-icons.png";
import "../SubredditList/SubredditList.css";

const SubredditList = () => {
  const [items, setItems] = useState([]);

  const getSubredditList = async () => {
    const subreddits = await getSubreddits();
    setItems(subreddits.children);
  };

  useEffect(() => {
    getSubredditList();
  }, []);

  return (
    <div className="subreddits">
      <h1 className="subreddits-heading">SubReddits</h1>
      <hr />
      {items.map((item) => (
        <div className="subreddits-list" key={item.data.id}>
          {item.data.icon_img ? (
            <img
              className="subreddit-img"
              src={item.data.icon_img}
              alt={item.data.display_name}
            />
          ) : (
            <img
              className="subreddit-img"
              src={missingIcon}
              alt={item.data.display_name}
            />
          )}
          <h2>
            <Link
              to={`/subreddit/${item.data.display_name}`}
              className="subreddit-name"
            >
              {item.data.display_name}
            </Link>
          </h2>
        </div>
      ))}
    </div>
  );
};

export default SubredditList;
