import MealsList from "./components/MealsList"
import MealsProvider from "./providers/MealsProvider"
import Counter from "./components/Counter"
function App() {

  return (
    <div>
      <MealsProvider>
      <Counter/>
      <MealsList/>
      </MealsProvider>
    </div>
  )
}

export default App
