import React from "react";
import classes from './HeaderCartBtn.module.css'

function HeaderCartBtn(props){

    return(
        <button className={classes.header_cart_btn}>
            <img
              className={classes.cart_img}
              alt="cart-icon"
              src="/media/cart-icon.png"
            ></img>
            <h4 className={classes.your_cart}>Your Cart</h4>
            <h4 className={classes.cart_item_count}>0</h4>
        </button>
    )
}

export default HeaderCartBtn;