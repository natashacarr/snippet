import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Nav from "./Features/Nav/Nav";
import Home from "./Features/Home/Home";
import Posts from "./Features/Posts/Posts";
import SearchResults from "./Features/SearchResults/SearchResults";
import SubredditList from "./Features/SubredditList/SubredditList";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL + "/"}>
      <div className="App">
        <Nav />
        <div className="main">
          <SubredditList />
          <Switch>
            <Route path="/subreddit/:subreddit" component={Posts} />
            <Route path="/:search" component={SearchResults} />
            <Route path="/" exact component={Home} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
