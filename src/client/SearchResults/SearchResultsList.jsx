import React from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import HotelCard from "./HotelCard";
import "./SearchResultsList.css";
import { Link } from "react-router-dom";

const HOTELS_QUERY = gql`
  query hotelsQuery {
    hotels {
      id
      name
      city
      imageUrl
      price {
        amount
        currencyCode
      }
    }
  }
`;

const SearchResultsList = () => {
  const { loading, error, data } = useQuery(HOTELS_QUERY);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    throw error;
  }

  return (
    <div className="search-results-list">
      {data.hotels.map(hotel => (
        <Link to={`/hotel/${hotel.id}`} key={hotel.id}>
          <HotelCard
            name={hotel.name}
            city={hotel.city}
            imageUrl={hotel.imageUrl}
            price={hotel.price}
            reviewScore={hotel.reviewScore || 5.1}
          />
        </Link>
      ))}
    </div>
  );
};

export default SearchResultsList;
