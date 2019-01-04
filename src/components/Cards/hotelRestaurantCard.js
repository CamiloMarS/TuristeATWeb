import React, { Component } from "react";
import GeneralCard from "../genaralCard/generalCard.js";
import imgP from "../../assets/images/2018-08-24.png";
import "./hotelRestaurantcard.css";

class HotelRestaurantCard extends Component {
  render() {
    return (
      <div className="cardHotelRs">
        <div>{this.props.title}</div>
        <img
          alt="ss"
          src={
            "https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?cs=srgb&dl=beautiful-blur-bright-326055.jpg&fm=jpg"
          }
          className="cardHRImage"
        />
      </div>
    );
  }
}

export default GeneralCard(HotelRestaurantCard);
