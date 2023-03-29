import { useMealsListContext } from "../providers/MealsProvider"
import MealItem from "./MealItem";
const MealsList = () => {
    const meals=useMealsListContext();
  return (
    <div>
        <h1>Meals list using Context API</h1>
        {meals.map((meal,index)=>{
            return <MealItem 
            key={meal.id}
            name={meal.name}
            calories={meal.calories}/>
        })}
    </div>
  )
}

export default MealsList