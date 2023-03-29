import { useMealsListContext } from "../providers/MealsProvider"

const Counter = () => {
    const meal=useMealsListContext()
  return (
    <div>
        <h1>Total Meals: {meal.length}</h1>
    </div>
  )
}

export default Counter