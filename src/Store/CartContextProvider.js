import React, { useState } from "react";
import CartContext from "./cart-context";

const CartContextProvider = (props) => {
  //------------ making state for showing cart---------------------//
  const [isCartVisible, setIsCartVisible] = useState(false);

  function showCartHandler(e) {
    setIsCartVisible(true);
  }

  function hideCartHandler(e) {
    setIsCartVisible(false);
  }

  //----------------- for adding and removing items from cart---------------//
  const [items,setItems] = useState([])

  function addItemToCartHandler(item){
        setItems((currentItems)=>{
            return [...currentItems,item]
        })
  }

  function removeItemFromCartHandler(id){

  }

  //----------------------------------------------------------------------//
  const cartContextObj = {
    isCartVisible: isCartVisible,
    showCart: showCartHandler,
    hideCart: hideCartHandler,
    items : items,
    totalAmount : 0,
    addItem : addItemToCartHandler,
    removeItem : removeItemFromCartHandler
  }

  return (
    <CartContext.Provider value={cartContextObj}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;