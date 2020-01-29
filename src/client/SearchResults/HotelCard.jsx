import React from "react";
import PropTypes from "prop-types";
import ReviewScore from "@bookingcom/bui-react/components/ReviewScore";

import "./HotelCard.css";

function getFormattedPrice(priceInfo) {
  return `${priceInfo.currencyCode} ${priceInfo.price}`;
}

function HotelCard(props) {
  const { name, city, imageUrl, priceInfo, score } = props;

  const price = getFormattedPrice(priceInfo);
  const formattedImage = `http://q-xx.bstatic.com${imageUrl}`;

  return (
    <div className="hotel-card">
      <div className="hotel-card__side">
        <img src={formattedImage} className="hotel-card__image" alt="" />
      </div>
      <div className="hotel-card__inner">
        <div className="hotel-card__top">
          <div className="hotel-card__title">{name}</div>
        </div>
        <div className="hotel-card__city-name">{city}</div>
        <div className="hotel-card__city-price">{price}</div>
        <ReviewScore score={score} />
      </div>
    </div>
  );
}

HotelCard.defaultProps = {};

HotelCard.propTypes = {
  name: PropTypes.string.isRequired,
  priceInfo: PropTypes.shape({
    price: PropTypes.number,
    currencyCode: PropTypes.string
  }).isRequired,
  imageUrl: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired
};

export default HotelCard;
