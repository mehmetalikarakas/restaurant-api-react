import { useState } from "react";
import Restaurant from "./components/Restaurant";
import Nav from "./components/Nav";
import "./App.css";
function App() {
  const [restaurants, setRestaurants] = useState([]);

  return (
    <div className="App">
      <Nav restaurants={restaurants} setRestaurants={setRestaurants} />
      {restaurants.map((resta) => (
        <Restaurant key={resta.id} restaurant={resta} />
      ))}
    </div>
  );
}

export default App;
