import React from "react";
import "./Header.css";
import HeaderCartBtn from "./HearderCartBtn";
import mainImg from '../../assets/restaurant_banner.jpg'

function Header() {
  return (
    <header className="header">
        <nav className="nav_bar">
          <h1>ReactMeals</h1>
          <HeaderCartBtn/>
        </nav>
        <div className="restaurant_banner">
          <img src={mainImg} alt="restaurant_banner"></img>
        </div>
    </header>
  );
}

export default Header;
