import React from "react";
import classes from './MealItem.module.css'

function MealItem(props){

    return (
        <div id={props.id} className={classes.meal_item}>
            <h3>{props.name}</h3>
            <p>{props.description}</p>
            <h3 className={classes.meal_price}>{`$${props.price}`}</h3>
        </div>
    )
}

export default MealItem;