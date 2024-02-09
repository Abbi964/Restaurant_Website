import React from "react";
import Card from "../UI/Card";
import classes from './MealsSummary.module.css'

function MealsSummary() {
  return (
    <Card className={classes.summary}>
      <h1>Delicious Food, Delivered To You</h1>
      <p>
        Choose your favorite mean from our broad selection of avalable meals or
        enjoy a delicious lunch or dinner at home
      </p>
      <p>
        All our meals are cooked with high quality ingredients, just in time and
        ofcourse by experienced chefs!
      </p>
    </Card>
  );
}

export default MealsSummary;
