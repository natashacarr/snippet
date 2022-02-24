import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import snippetLogo from "../Nav/snippet-logo.png";
import "../Nav/Nav.css";

const Nav = () => {
  const [search, setSearch] = useState("");
  let history = useHistory();

  const handleChange = (search) => {
    setSearch(search.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/${search}`);
  };

  return (
    <div className="nav">
      <img src={snippetLogo} className="logo" alt="Snippet logo" />

      <div className="search">
        <form className="search-form" onSubmit={handleSubmit}>
          <input
            className="searchbar"
            type="text"
            value={search}
            placeholder="Search..."
            onChange={handleChange}
          />
          <Link to={`/${search}`}>
            <FiSearch className="search-icon" />
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Nav;
