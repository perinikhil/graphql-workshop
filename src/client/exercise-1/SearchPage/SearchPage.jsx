import React from "react";
import SearchPageCard from './SearchPageCard/SearchPageCard';
import "./SearchPage.css";

const SearchPage = () => {
  return (
    <div className="search-page">
      <div className="search-page__list">
        <SearchPageCard
          id="2861366"
          name="Tru By Hilton Las Vegas Airport NV"
          imageUrl="/xdata/images/hotel/square600/140959489.jpg?k=da4d90b360baf30f94f53b29c47efc6b95fc99a59dd17b4d005dbda0ff7cae95&o="
          city="Las Vegas"
          reviewScore={7.5}
          price={{ amount: 231.34, currencyCode: "USD"}}
        />
      </div>
    </div>
  );
};

export default SearchPage;
