import React, {useState} from "react";

const Context = React.createContext({
    isCartVisible : false,
    showCart : ()=>{},
    hideCart : ()=>{}
})

export const ContextProvider = (props)=>{

  // making state for showing cart
  const [isCartVisible,setIsCartVisible] = useState(false)

  function showCartHandler(e){
    setIsCartVisible(true)
  }

  function hideCartHandler(e){
    setIsCartVisible(false)
  }

  return (
    <Context.Provider value={{
        isCartVisible : isCartVisible,
        showCart : showCartHandler,
        hideCart : hideCartHandler
    }}>
        {props.children}
    </Context.Provider>
  )
}

export default Context;