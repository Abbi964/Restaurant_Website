import React, { useContext, useRef } from "react";
import classes from './MealItem.module.css'
import MealsContext from "../../../Store/meals-context";
import CartContext from "../../../Store/cart-context";

function MealItem(props){
    const mealsCtx = useContext(MealsContext);
    const cartCtx = useContext(CartContext)

    // using ref for amount
    let amountInputRef = useRef()

    function addItemHandler(e){
        let id = e.target.parentElement.parentElement.id
        // first getting item obj from dummyMealsArr from mealsContext
        let result = mealsCtx.mealsList.filter((meal)=>{
            return meal.id === id
        })
        let mealObj = result[0]
        // now adding item to cartItems
        cartCtx.addItem({
            id : Math.random(),
            name : mealObj.name,
            price : mealObj.price,
            amount : amountInputRef.current.value,
        })
        amountInputRef.current.value = ''
    }

    return (
        <div id={props.id} className={classes.meal_item}>
            <div className="meal_detail">
                <h3>{props.name}</h3>
                <p>{props.description}</p>
                <h3 className={classes.meal_price}>{`$${props.price}`}</h3>
            </div>
            <div className={classes.meal_form}>
                <label htmlFor="meal_amount">Amount</label>
                <input ref={amountInputRef} type="number" id="meal_amount"/><br/>
                <button onClick={addItemHandler} type="button">+ Add</button>
            </div>
        </div>
    )
}

export default MealItem;