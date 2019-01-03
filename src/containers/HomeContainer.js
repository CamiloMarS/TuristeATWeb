import React from "react";
import HotelRestaurantCard from '../components/Cards/hotelRestaurantCard.js';

class HomeContainer extends React.Component {
  render() {
    return (
      <div>
        <h2>Home Container</h2>
        <div style={{display:"flex", flexWrap: "wrap", width:"100%"}}>
        <HotelRestaurantCard title="Una prueba" description="Lorem ipsum dolor sit amet,"/>
        <HotelRestaurantCard title="Una prueba" description="Lorem ipsum dolor sit amet,"/>
        </div>
      </div>
    );
  }
}

export default HomeContainer;
