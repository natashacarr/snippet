import React, { useState, useEffect } from "react";
import { getPopular } from "../../api/reddit";
import Card from "../../Components/Card/Card";
import "../Home/Home.css";

const Home = () => {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    const posts = await getPopular();
    setPosts(posts.children);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="home-posts">
      {posts.map((post) => (
        <Card
          className="home-post"
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

export default Home;
