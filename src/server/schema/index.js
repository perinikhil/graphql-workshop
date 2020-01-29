const { gql } = require("apollo-server");

const API_URL = 'http://localhost:5000/api';

const schema = {
  typeDefs: [
    gql`
      type Query {
        hotels: [Hotel!]!
      }
    `,
    gql`
      type Price {
        amount: Float!
        currencyCode: String!
      }
    `,
    gql`
      type Hotel {
        id: ID!,
        city: String!
        imageUrl: String!
        name: String!
        price: Price!
        reviewScore: Float!
      }
    `
  ],
  resolvers: {
    Query: {
      hotels: () => fetch(`${API_URL}/hotels/`)
        .then((res) => res.json())
    },
    Price: {
      amount: (price) => price.price,
      currencyCode: (price) => price.currencyCode,
    },
    Hotel: {
      id: (hotel) => hotel.id,
      city: (hotel) => hotel.city,
      imageUrl: (hotel) => hotel.imageUrl,
      name: (hotel) => hotel.name,
      price: (hotel) => hotel.priceInfo,
      reviewScore: (hotel) => hotel.score,
    }
  }
};

module.exports = schema;
