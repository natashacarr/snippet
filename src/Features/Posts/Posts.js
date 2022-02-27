import React, { useState, useEffect } from "react";
import { getSubredditPosts } from "../../api/reddit";
import Card from "../../Components/Card/Card";
import "../Posts/Posts.css";
const Posts = ({ match }) => {
  const [posts, setPosts] = useState([]);
  const subreddit = match.params.subreddit;

  useEffect(() => {
    const getPosts = async () => {
      const posts = await getSubredditPosts(subreddit);
      setPosts(posts.children);
    };

    getPosts();
  }, [subreddit]);

  console.log(posts);

  return (
    <div className="subreddit-posts">
      {posts.map((post) => (
        <Card
          className="post"
          key={post.data.id}
          postTitle={post.data.title}
          postAuthor={post.data.author}
          postUpvote={post.data.upvote_ratio}
          postText={post.data.selftext}
          postImg={post.data.url}
          postComments={post.data.permalink}
          postSubreddit={post.data.subreddit_name_prefixed}
          postURL={post.data.url}
        />
      ))}
    </div>
  );
};

export default Posts;
