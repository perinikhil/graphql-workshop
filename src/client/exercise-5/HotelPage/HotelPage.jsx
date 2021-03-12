import React from "react";
import { useParams } from "react-router-dom";
import { gql, useQuery, useMutation } from '@apollo/client';
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
    guestName: '',
    message: '',
  });

  if (hotelLoading) return <p>Loading...</p>;

  if (hotelError) return <p>{hotelError.message}</p>;

  const { hotelById: hotel } = data;

  const formattedPrice = getFormattedPrice(hotel.price);
  const formattedImage = getFormattedImageUrl(hotel.imageUrl);

  const handleReviewChange = ({ name, value }) => {
    setReview((prevReview) => ({
      ...prevReview,
      [name]: value,
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
            name: review.guestName
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
          name="guestName"
          placeholder="Name"
          value={review.guestName}
          onChange={handleReviewChange}
          disabled={createReviewLoading}
          required
        />
        <InputText
          className="hotel-page__review-form-message"
          name="message"
          placeholder="Leave a positive review only..."
          value={review.message}
          onChange={handleReviewChange}
          disabled={createReviewLoading}
        />
        <Button
          className="hotel-page__review-form-submit"
          type="submit"
          disabled={createReviewLoading}
        >
          Add Review
        </Button>
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
