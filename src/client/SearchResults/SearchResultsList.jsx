import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

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
    return (
      <div>
        Loading...
      </div>
    )
  }

  if (error) {
    throw(error);
  }

  console.log('data: ', data);
  return (
    <div>
      {data.hotels.map((hotel) => (
        <div>
          Name: {hotel.name}
        </div>
      ))}
    </div>
  )
}

export default SearchResultsList;