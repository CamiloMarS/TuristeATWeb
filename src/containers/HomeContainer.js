import React from "react";
import HotelRestaurantCard from "../components/Cards/hotelRestaurantCard.js";
import "./styles/home.css";

class HomeContainer extends React.Component {
  render() {
    return (
      <div>
        <div className="panelTop contentCenter">
          <h3>Bienvenido</h3>
        </div>
        <h2>Home Container</h2>
        <div>
          <HotelRestaurantCard
            title="Una prueba"
            description="Lorem ipsum dolor sit amet,"
          />
          <HotelRestaurantCard
            title="Una prueba"
            description="Lorem ipsum dolor sit amet,"
          />
        </div>
      </div>
    );
  }
}

export default HomeContainer;
