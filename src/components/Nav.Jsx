import React from "react";

function Nav({ restaurants, setRestaurants }) {
  const fetchRestaurant = async () => {
    const res = await fetch(
      "https://random-data-api.com/api/restaurant/random_restaurant"
    );
    const data = await res.json();
    setRestaurants([...restaurants, data]);
  };

  return (
    <div className="navbar">
      <button onClick={fetchRestaurant}>Add new restaurant</button>
    </div>
  );
}

export default Nav;
