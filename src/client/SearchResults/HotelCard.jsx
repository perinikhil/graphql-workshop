import React from "react";
import PropTypes from "prop-types";
import ReviewScore from "@bookingcom/bui-react/components/ReviewScore";
import { Link } from "react-router-dom";
import getFormattedImageUrl from "../utils/getFormattedImageUrl";

import "./HotelCard.css";

function getFormattedPrice(price) {
  return `${price.currencyCode} ${price.amount}`;
}

function HotelCard(props) {
  const { name, city, imageUrl, price, reviewScore, id } = props;

  const formattedPrice = getFormattedPrice(price);
  const formattedImage = getFormattedImageUrl(imageUrl);

  return (
    <div className="hotel-card">
      <Link to={`/hotel/${id}`}>
        <div className="hotel-card__side">
          <img src={formattedImage} className="hotel-card__image" alt="" />
        </div>
        <div className="hotel-card__inner">
          <div className="hotel-card__top">
            <div className="hotel-card__title">{name}</div>
          </div>
          <div className="hotel-card__city-name">{city}</div>
          <div className="hotel-card__city-price">{formattedPrice}</div>
          <ReviewScore score={reviewScore} />
        </div>
      </Link>
    </div>
  );
}

HotelCard.defaultProps = {};

HotelCard.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.shape({
    amount: PropTypes.number,
    currencyCode: PropTypes.string
  }).isRequired,
  imageUrl: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  reviewScore: PropTypes.number.isRequired,
  id: PropTypes.string
};

export default HotelCard;
