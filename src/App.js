import React, {Fragment ,useContext} from "react";
import Header from './components/Layout/Header'
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartContext from "./Store/cart-context";

function App() {
  const cartCtx = useContext(CartContext)

  return (
    <Fragment>
      {cartCtx.isCartVisible && <Cart/>}
      <Header/>
      <main>
        <Meals/>
      </main>
    </Fragment>
  );
}

export default App;
