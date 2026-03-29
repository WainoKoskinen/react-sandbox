import { AppleBasket } from "./components/AppleBasket"
import { AppleButton } from "./components/AppleButton"
import MovieList from "./components/MovieList"

function App() {

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <AppleButton/>
      <AppleBasket/>
      <MovieList />
    </div>
  )
}

export default App
