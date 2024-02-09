import React, { useContext } from "react";
import MealItem from "./MealItem";
import classes from './MealsList.module.css'
import MealsContext from "../../../Store/meals-context";

function MealsList(props){
const mealsCtx = useContext(MealsContext)

    let content = mealsCtx.mealsList.map((meal)=>(
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