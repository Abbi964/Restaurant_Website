import React from "react";
import MealItem from "./MealItem";
import classes from './MealsList.module.css'

function MealsList(props){
    let content = props.items.map((meal)=>(
        <MealItem 
        key={meal.id}
        id={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
        />
    ))

    return(
        <div className={classes.meal_list}>
            {content}
        </div>
    )
}

export default MealsList;