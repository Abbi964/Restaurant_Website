import React from "react";

const CartContext = React.createContext({
    isCartVisible : false,
    showCart : ()=>{},
    hideCart : ()=>{},
    items : [],
    totalAmount : 0,
    addItem : ()=>{},
    removeItem : ()=>{}
})

export default CartContext;