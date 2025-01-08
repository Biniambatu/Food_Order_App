import { Fragment } from "react"
import AvailableMeals from "./AvailableMeals"
import MealsSummary from "./MealsSummary"
import Cart from "../Cart/Cart"


const Meals = () => {
  return (
    <>
        <MealsSummary/>
        <AvailableMeals/> 
    </>
  )
}

export default Meals