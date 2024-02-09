import React from "react";
import MealsSummary from "./MealsSummary";
import MealsList from "./MealsList/MealsList";
import MealsContextProvider from "../../Store/MealsContextProvider";

function Meals(){

    return(
        <MealsContextProvider>
          <MealsSummary/>
          <MealsList/>
        </MealsContextProvider>
    )
}

export default Meals;