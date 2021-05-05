import React from "react";
import { gql, useQuery } from '@apollo/client';
import SearchPageCard from './SearchPageCard/SearchPageCard';
import "./SearchPage.css";

const searchQuery = gql`
  query {
    hotels {
      id
      city
      imageUrl
      name
      price {
        amount
        currencyCode
      }
      reviewScore
    }
  }
`;

const SearchPage = () => {
  const [destination, setDestination] = React.useState('');
  const { loading, error, data } = useQuery(searchQuery);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>{error.message}</p>;

  const { hotels } = data;

  const handleDestinationChange = (e) => {
    setDestination(e.target.value);
  }

  const handleSearch = () => {
    console.log(destination);
  }

  return (
    <div className="search-page">
      <div className="search-page__destination">
        <input
          className="search-page__destination-input"
          name="destination"
          placeholder="Where would you like to go?"
          onChange={handleDestinationChange}
          value={destination}
        />
        <button
          className="search-page__destination-search"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
      <div className="search-page__list">
        {hotels.map(hotel => (
          <SearchPageCard
            key={hotel.id}
            id={hotel.id}
            name={hotel.name}
            imageUrl={hotel.imageUrl}
            city={hotel.city}
            reviewScore={hotel.reviewScore}
            price={hotel.price}
          />
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
