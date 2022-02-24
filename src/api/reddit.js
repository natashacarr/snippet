const ROOT_API = "https://www.reddit.com";

export const getPopular = async () => {
  const response = await fetch(`${ROOT_API}/r/popular.json`);
  const json = await response.json();

  return json.data;
};

export const getSubreddits = async () => {
  const response = await fetch(`${ROOT_API}/subreddits.json`);
  const json = await response.json();

  return json.data;
};

export const getSubredditPosts = async (subreddit) => {
  const response = await fetch(`${ROOT_API}/r/${subreddit}.json`);
  const json = await response.json();

  return json.data;
};

export const getSearchResults = async (search) => {
  const response = await fetch(`${ROOT_API}/search.json?q=${search}`);
  const json = await response.json();

  return json.data;
};

export const getPostComments = async (post) => {
  const response = await fetch(`${ROOT_API}${post}.json`);
  const json = await response.json();
  // const jsonLimited = json[1].data.children.slice(0, 10);

  // console.log(jsonLimited);

  return json[1].data;
};
