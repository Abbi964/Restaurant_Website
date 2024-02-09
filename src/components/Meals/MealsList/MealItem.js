import React from "react";
import classes from './MealItem.module.css'

function MealItem(props){

    return (
        <div id={props.id} className={classes.meal_item}>
            <div className="meal_detail">
                <h3>{props.name}</h3>
                <p>{props.description}</p>
                <h3 className={classes.meal_price}>{`$${props.price}`}</h3>
            </div>
            <div className={classes.meal_form}>
                <label htmlFor="meal_amount">Amount</label>
                <input type="number" id="meal_amount"/><br/>
                <button type="button">+ Add</button>
            </div>
        </div>
    )
}

export default MealItem;