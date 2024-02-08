import React from "react";
import './Header.css';

function Header(){

    return(
        <header className="header">
            <nav className="nav_bar">
                <h1>ReactMeals</h1>
                <div className="header_cart">
                    <img className="cart_img" alt="cart-icon" src="/media/cart-icon.png"></img>
                    <h4 className="your_cart">Your Cart</h4>
                    <h4 className="cart_item_count">0</h4>
                </div>
            </nav>
            <div className="restaurant_banner">
                <img src="/media/restaurant_banner.jpg" alt="restaurant_banner"></img>
            </div>
        </header>
    )
}

export default Header;