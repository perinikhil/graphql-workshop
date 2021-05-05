import React from "react";
import SearchPageCard from './SearchPageCard/SearchPageCard';
import "./SearchPage.css";

const hotel = {
  id: '2861366',
  reviewScore: 7.5,
  name: "Tru By Hilton Las Vegas Airport NV",
  city: "Las Vegas",
  imageUrl:
    "/xdata/images/hotel/square600/140959489.jpg?k=da4d90b360baf30f94f53b29c47efc6b95fc99a59dd17b4d005dbda0ff7cae95&o=",
  price: {
    amount: 231.34,
    currencyCode: "USD"
  }
}

const SearchPage = () => {
  return (
    <div className="search-page">
      <div className="search-page__list">
        <SearchPageCard
          key={hotel.id}
          id={hotel.id}
          name={hotel.name}
          imageUrl={hotel.imageUrl}
          city={hotel.city}
          reviewScore={hotel.reviewScore}
          price={hotel.price}
        />
      </div>
    </div>
  );
};

export default SearchPage;
