import React from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import HotelCard from "./HotelCard";
import "./SearchResultsList.css";

const HOTELS_QUERY = gql`
  query hotelsQuery {
    hotels {
      id
      name
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

  const hotel = {
    id: 1247913,
    ufi: -1456928,
    name: "Generator Paris",
    city: "Paris",
    imageUrl:
      "/xdata/images/hotel/square600/42009813.jpg?k=918201e09e71adf1ef8218136dc48825e1406c77c28f3e7c1e961ea0e601c42d&o=",
    score: 8.4,
    priceInfo: {
      price: 270.0,
      currencyCode: "EUR"
    }
  };

  return (
    <div className="search-results-list">
      <HotelCard
        name={hotel.name}
        city={hotel.city}
        imageUrl={hotel.imageUrl}
        priceInfo={hotel.priceInfo}
        score={hotel.score}
      />
    </div>
  );
};

export default SearchResultsList;
