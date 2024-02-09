import React, {Fragment ,useContext} from "react";
import Header from './components/Layout/Header'
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import Context from "./context/context";

function App() {
  const ctx = useContext(Context)

  return (
    <Fragment>
      {ctx.isCartVisible && <Cart/>}
      <Header/>
      <main>
        <Meals/>
      </main>
    </Fragment>
  );
}

export default App;
