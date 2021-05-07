import React from "react";
import { useParams } from "react-router-dom";
import { gql, useQuery } from '@apollo/client';
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

  const handleReviewChange = (e) => {
    e.persist();
    setReview((prevReview) => ({
      ...prevReview,
      [e.target.name]: e.target.value,
    }));
  }

  const handleReviewCreate = (e) => {
    e.preventDefault();
    console.log(review);
  }

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
      <form
        className="hotel-page__review-form"
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
