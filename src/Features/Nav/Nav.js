import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { SiReddit } from "react-icons/si";
import { FiSearch } from "react-icons/fi";
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
      <div className="logo">
        <SiReddit className="logo-icon" />
        <h1 className="heading">
          Sni<span>pp</span>et
        </h1>
      </div>
      <p className="subheading">Reddit, minimised</p>
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
