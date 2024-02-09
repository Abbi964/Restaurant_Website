import React, { useContext } from "react";
import classes from './Cart.module.css'
import Modal from "../UI/Modal";
import Context from "../../context/context";

function Cart(props){
    const ctx = useContext(Context)

    const cartItems = <ul className={classes.cart_items} >{[
        {id : 'c1', name: 'Shushi', amount : 2, price : 12.99}].map(item =>(<li>{item.name}</li>)) 
        }</ul>  

    return (
        <Modal>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>35.85</span>
            </div>
            <div className={classes.actions}>
                <button onClick={ctx.hideCart} className={classes.button_alt}>Close</button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>

    )
  
}

export default Cart;