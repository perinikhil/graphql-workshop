import React from "react";
import "./HotelPage.css";
import HotelDetail from "./HotelDetail";

const hotel = {
  id: 1247913,
  ufi: -1456928,
  name: "Generator Paris",
  address: "1452 Eiffell Tower road, Paris",
  description: "Lorem ipsum blah blah blah",
  city: "Paris",
  imageUrl:
    "/xdata/images/hotel/square600/42009813.jpg?k=918201e09e71adf1ef8218136dc48825e1406c77c28f3e7c1e961ea0e601c42d&o=",
  reviewScore: 8.4
};

function HotelPage() {
  return (
    <div className="hotel-page">
      <HotelDetail
        name={hotel.name}
        address={hotel.address}
        imageUrl={hotel.imageUrl}
        description={hotel.description}
        reviewScore={hotel.reviewScore}
      />
    </div>
  );
}

export default HotelPage;
