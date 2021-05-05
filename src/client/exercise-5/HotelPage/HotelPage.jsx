import React from "react";
import { useParams } from "react-router-dom";
import { gql, useQuery, useMutation } from '@apollo/client';
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

const reviewCreateMutation = gql`
  mutation($review: ReviewInput!) {
    addReview(review: $review) {
      id
      message
      guest {
        name
      }
    }
  }
`;

const HotelPage = () => {
  const { id } = useParams();
  const { loading: hotelLoading, error: hotelError, data, refetch: hotelRefetch } = useQuery(hotelQuery, { variables: { id } });
  const [createReview, { loading: createReviewLoading, error: createReviewError }] = useMutation(reviewCreateMutation);
  const [review, setReview] = React.useState({
    name: '',
    message: '',
  });

  if (hotelLoading) return <p>Loading...</p>;

  if (hotelError) return <p>{hotelError.message}</p>;

  const { hotelById: hotel } = data;

  const formattedPrice = getFormattedPrice(hotel.price);
  const formattedImage = getFormattedImageUrl(hotel.imageUrl);

  const handleReviewChange = (e) => {
    e.persist();
    setReview((prevReview) => ({
      ...prevReview,
      [e.target.name]: e.target.value,
    }));
  }

  const handleReviewCreate = (e) => {
    e.preventDefault();
    createReview({
      variables: {
        review: {
          hotelId: id,
          message: review.message,
          guest: {
            name: review.name
          }
        }
      }
    }).then(() => {
      hotelRefetch();
    })
    .catch(() => {});
  }

  return (
    <div className="hotel-page">
      <img className="hotel-page__image" src={formattedImage} alt="" />
      <div className="hotel-page__section">
        <h2 className="hotel-page__title">{hotel.name}</h2>
        <h4 className="hotel-page__review-score">{hotel.reviewScore}</h4>
      </div>
      <div className="hotel-page__section">
        <p className="hotel-page__city">{hotel.city}</p>
        <h3 className="hotel-page__price">{formattedPrice}</h3>
      </div>
      <form
        className="hotel-page__review-form"
        disabled={createReviewLoading}
        onSubmit={handleReviewCreate}
      >
        <input
          className="hotel-page__review-form-name"
          name="name"
          placeholder="Name"
          onChange={handleReviewChange}
          value={review.name}
        />
        <input
          className="hotel-page__review-form-message"
          name="message"
          placeholder="Leave a positive review only..."
          onChange={handleReviewChange}
          value={review.message}
        />
        <button
          className="hotel-page__review-form-submit"
          type="submit"
        >
          Add Review
        </button>
        {createReviewError &&
          <p className="hotel-page__review-form-error">{createReviewError.message}</p>}
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
