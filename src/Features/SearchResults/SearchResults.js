import React, { useState, useEffect } from "react";
import { getSearchResults } from "../../api/reddit";
import Card from "../../Components/Card/Card";
import "../SearchResults/SearchResults.css";

const SearchResults = ({ match }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getResults = async () => {
      const results = await getSearchResults(match.params.search);
      setPosts(results.children);
    };

    getResults();
  }, [match.params.search]);

  return (
    <div className="searchresult-posts">
      {posts.map((post) => (
        <Card
          className="result-post"
          key={post.data.id}
          postTitle={post.data.title}
          postAuthor={post.data.author}
          postUpvote={post.data.upvote_ratio}
          postText={post.data.selftext}
          postImg={post.data.url}
          postComments={post.data.permalink}
          postSubreddit={post.data.subreddit_name_prefixed}
        />
      ))}
    </div>
  );
};

export default SearchResults;
