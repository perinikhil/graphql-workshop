import React from "react";
import PropTypes from "prop-types";
import getFormattedImageUrl from "../utils/getFormattedImageUrl";
import ReviewScore from "@bookingcom/bui-react/components/ReviewScore";
import "./HotelDetail.css";

function HotelDetail({ name, description, imageUrl, reviewScore }) {
  const formattedImageUrl = getFormattedImageUrl(imageUrl);
  return (
    <div className="hotel-detail">
      <div className="hotel-detail__title">{name}</div>
      <div className="hotel-detail__image">
        <img src={formattedImageUrl} alt="" />
      </div>
      <div className="hotel-detail__description">{description}</div>
      <div className="hotel-detail__reviewScore">
        <ReviewScore score={reviewScore} />
      </div>
    </div>
  );
}

HotelDetail.propTypes = {
  name: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  reviewScore: PropTypes.number.isRequired
};

export default HotelDetail;
