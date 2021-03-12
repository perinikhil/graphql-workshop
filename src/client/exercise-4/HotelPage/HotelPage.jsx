import React from "react";
import { useParams } from "react-router-dom";
import { gql, useQuery } from '@apollo/client';
import ReviewScore from "@bookingcom/bui-react/components/ReviewScore";
import InputText from '@bookingcom/bui-react/components/InputText';
import Button from "@bookingcom/bui-react/components/Button";
import { getFormattedImageUrl,getFormattedPrice } from "../utils";
import "./HotelPage.css";

const hotelQuery = gql`
  query($id: ID!) {
    hotelById(id: $id) {
      id
      city
      imageUrl
      name
      price {
        amount
        currencyCode
      }
      reviewScore
      reviews {
        id
        message
        guest {
          name
        }
      }
    }
  }
`;

const HotelPage = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(hotelQuery, { variables: { id } });
  const [review, setReview] = React.useState({
    name: '',
    message: '',
  });

  if (loading) return <p>Loading...</p>;

  if (error) return <p>{error.message}</p>;

  const { hotelById: hotel } = data;

  const formattedPrice = getFormattedPrice(hotel.price);
  const formattedImage = getFormattedImageUrl(hotel.imageUrl);

  const handleReviewChange = ({ name, value }) => {
    setReview((prevReview) => ({
      ...prevReview,
      [name]: value,
    }));
  }

  const handleReviewCreate = () => {
    console.log(review);
  }

  return (
    <div className="hotel-page">
      <img className="hotel-page__image" src={formattedImage} alt="" />
      <div className="hotel-page__section">
        <h2 className="hotel-page__title">{hotel.name}</h2>
        <ReviewScore score={hotel.reviewScore} />
      </div>
      <div className="hotel-page__section">
        <p className="hotel-page__city">{hotel.city}</p>
        <h3 className="hotel-page__price">{formattedPrice}</h3>
      </div>
      <form
        className="hotel-page__review-form"
        onSubmit={handleReviewCreate}
      >
        <InputText
          className="hotel-page__review-form-name"
          name="name"
          placeholder="Name"
          value={review.name}
          onChange={handleReviewChange}
        />
        <InputText
          className="hotel-page__review-form-message"
          name="message"
          placeholder="Leave a positive review only..."
          value={review.message}
          onChange={handleReviewChange}
        />
        <Button
          className="hotel-page__review-add-review-submit"
          type="submit"
        >
          Add Review
        </Button>
      </form>
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
