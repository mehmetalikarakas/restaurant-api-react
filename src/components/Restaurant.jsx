import React from "react";

const restaurant = {
  id: 7905,
  uid: "7dc9b28c-9b09-4096-b94a-bc67cb1cf2a7",
  name: "Blue Spoon",
  type: "African",
  description:
    "Our mission is to be a leader in the distribution and merchandising of food, pharmacy, health and personal care items, seasonal merchandise, and related products and services. We place considerable importance on forging strong supplier partnerships. Our suppliers, large or small, local or global, are essential components in accomplishing our mission.",
  review:
    "For dinner we ordered the shrimp enchiladas, chicken enchiladas, chicken burrito, chimichangas, and steak quesadillas. Everything was so tasty and amazing. I wasnt surprised because the food at the FiDi location is the best so I figured this location would be just as good and it was!!! The enchiladas with the green sauce is to die for. My go to at the FiDi location is usually the chicken enchiladas but I decided to try something new and the shrimp enchiladas did not disappoint.",
  logo: "https://loremflickr.com/500/500/restaurant",
  phone_number: "529.750.3686 x26865",
  address: "Apt. 343 70447 Micheal Views, West Abdulborough, AK 20487",
  hours: {
    monday: {
      opens_at: "7:26 AM",
      closes_at: "6:45 PM",
      is_closed: true,
    },
    tuesday: {
      opens_at: "11:32 AM",
      closes_at: "3:21 PM",
      is_closed: true,
    },
    wednesday: {
      opens_at: "10:41 AM",
      closes_at: "6:19 PM",
      is_closed: true,
    },
    thursday: {
      opens_at: "8:12 AM",
      closes_at: "9:35 PM",
      is_closed: false,
    },
    friday: {
      opens_at: "11:11 AM",
      closes_at: "8:55 PM",
      is_closed: false,
    },
    saturday: {
      opens_at: "11:47 AM",
      closes_at: "12:30 PM",
      is_closed: false,
    },
    sunday: {
      opens_at: "10:54 AM",
      closes_at: "7:34 PM",
      is_closed: true,
    },
  },
};

function Restaurant() {
  return (
    <div className="restaurantDiv">
      <div className="restaurant">
        <div className="logo">
          <img src={restaurant.logo} alt="" />
        </div>
        <div className="restaurantInfo">
          <div className="restaurantNameType">
            <h1 className="restaurantName">{restaurant.name}</h1>
            <h2 className="restaurantType"> Type :{restaurant.type}</h2>
          </div>
          <div className="restaurantDesc">{restaurant.description}</div>
          <div className="restaurantAddress">Adress : {restaurant.address}</div>

          <div className="restaurantDaysDiv">
            <div>Days : </div>
            <div className="restaurantDays">
              {Object.keys(restaurant.hours).map((day) => (
                <p
                  key={day}
                  style={{
                    color: restaurant.hours[day].is_closed ? "tomato" : "green",
                  }}
                  className="day"
                >
                  {day}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Restaurant;
