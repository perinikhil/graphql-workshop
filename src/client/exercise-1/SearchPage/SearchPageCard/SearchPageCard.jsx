import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { getFormattedImageUrl,getFormattedPrice } from "../../utils";
import "./SearchPageCard.css";

const SearchPageCard = (props) => {
  const { id, name, city, imageUrl, price, reviewScore } = props;
  const formattedPrice = getFormattedPrice(price);
  const formattedImage = getFormattedImageUrl(imageUrl);

  return (
    <Link className="search-page-card" to={`/hotel/${id}`}>
      <div className="search-page-card__side">
        <img className="search-page-card__image" src={formattedImage} alt="" />
      </div>
      <div className="search-page-card__main">
        <div className="search-page-card__header">
          <h2 className="search-page-card__title">{name}</h2>
          <p className="search-page-card__city">{city}</p>
        </div>
        <div className="search-page-card__footer">
          <h4 className="search-page-card__review-score">{reviewScore}</h4>
          <h3 className="search-page-card__price">{formattedPrice}</h3>
        </div>
      </div>
    </Link>
  );
}

SearchPageCard.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  reviewScore: PropTypes.number.isRequired,
  price: PropTypes.shape({
    amount: PropTypes.number,
    currencyCode: PropTypes.string
  }).isRequired,
};

export default SearchPageCard;
