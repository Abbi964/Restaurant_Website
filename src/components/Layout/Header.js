import React from "react";
import "./Header.css";
import Card from "../UI/Card";

function Header() {
  return (
    <header className="header">
      <Card className="header_card">
        <nav className="nav_bar">
          <h1>ReactMeals</h1>
          <div className="header_cart">
            <img
              className="cart_img"
              alt="cart-icon"
              src="/media/cart-icon.png"
            ></img>
            <h4 className="your_cart">Your Cart</h4>
            <h4 className="cart_item_count">0</h4>
          </div>
        </nav>
        <div className="restaurant_banner">
          <img src="/media/restaurant_banner.jpg" alt="restaurant_banner"></img>
        </div>
      </Card>
      <Card className="summary">
        <h1>Delicious Food, Delivered To You</h1>
        <p>
          Choose your favorite mean from our broad selection of avalable meals
          or enjoy a delicious lunch or dinner at home
        </p>
        <p>
          All our meals are cooked with high quality ingredients, just in time
          and ofcourse by experienced chefs!
        </p>
      </Card>
    </header>
  );
}

export default Header;
