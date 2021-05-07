import React from "react";
// import { useParams } from "react-router-dom";
import "./HotelPage.css";

const hotel = {
  id: 2861366,
  reviewScore: 7.5,
  name: "Tru By Hilton Las Vegas Airport NV",
  city: "Las Vegas",
  imageUrl:
    "/xdata/images/hotel/square600/140959489.jpg?k=da4d90b360baf30f94f53b29c47efc6b95fc99a59dd17b4d005dbda0ff7cae95&o=",
  price: {
    amount: 231.34,
    currencyCode: "USD"
  },
  reviews: [
    {
      id: 3802009977,
      averageScoreOutOf_10: 10,
      guest: {
        name: "Virginia",
      },
      message:
        "The staff was very friendly. The room was very clean and comfortable. \nThere were a variety of choices for breakfast and more than enough food. \nThere was a pool table in the lobby for guest to enjoy. \nThe location is right next to the car rental center with easy access to the airport and highway. \nIt is close to the strip, by car, but far enough away to keep you out of the congestion.\nGood price. I’d definitely come back when I’m in the area. ",
    },
    {
      id: 4521354086,
      averageScoreOutOf_10: 10,
      guest: {
        name: "Cynthia",
      },
      message:
        "Shuttle service and breakfast. That took away some of the stresses of travel",
    }
  ]
}

const HotelPage = () => {
  // const { id } = useParams(); // hotel's id from the SearchPageCard you clicked

  return (
    <div className="hotel-page">
      <img className="hotel-page__image" src={`http://q-xx.bstatic.com${hotel.imageUrl}`} alt="" />
      <div className="hotel-page__section">
        <h2 className="hotel-page__title">{hotel.name}</h2>
        <h4 className="hotel-page__review-score">{hotel.reviewScore}</h4>
      </div>
      <div className="hotel-page__section">
        <p className="hotel-page__city">{hotel.city}</p>
        <h3 className="hotel-page__price">{hotel.price.currencyCode} {hotel.price.amount}</h3>
      </div>
      <div className="hotel-page__review-list">
        {hotel.reviews.map((review) => (
          <div key={review.id} className="hotel-page__review">
            <h5 className="hotel-page__review-name">{review.guest.name}</h5>
            <p className="hotel-page__review-message">{review.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HotelPage;
