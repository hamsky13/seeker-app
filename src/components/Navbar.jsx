import React from "react";
import Logo from "../assets/Seeker7 1.svg";
import Home from "../assets/Home.svg";
import Category from "../assets/Category.svg";
import Bookmark from "../assets/Bookmark.svg";
import Profile from "../assets/Profile.svg";
import Notification from "../assets/Vector.svg";
import Avatar from "../assets/avatar.svg";
import PageDown from "../assets/page-down.svg";
import "../assets/navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav>
        <Link to="/">
          <img className="logo-navbar" src={Logo} alt="seeker" />
        </Link>
        <Link to="/dashboard">
          <img className="home-navbar" src={Home} alt="home" />
        </Link>
        <Link to="/category">
          <img className="category-navbar" src={Category} alt="category" />
        </Link>
        <Link to="/bookmark">
          <img className="bookmark-navbar" src={Bookmark} alt="bookmark" />
        </Link>
        <Link to="/profile">
          <img className="profile-navbar" src={Profile} alt="profile" />
        </Link>
      </nav>
      <div className="search-bar">
        <input className="input-search" type="text" placeholder="Search" />
        <img className="notification" src={Notification} alt="bell" />
        <div className="account">
          <img className="avatar" src={Avatar} alt="avatar" />
          <label className="profile-name">Bayuna Rama</label>
          <img src={PageDown} alt="arrow-down" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
