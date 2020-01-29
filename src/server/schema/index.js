const { gql } = require('apollo-server');

const schema = {
  typeDefs: [
    gql`
      type Query {
        hotels: [Hotel!]!
      }
    `,
    gql`
      type Hotel {
        id: ID!,
        name: String!
      }
    `,
  ],
  resolvers: {
    Query: {
      hotels: () => fetch('http://example.com/api/hotels/')
        .then((res) => res.json())
        .then((res) => res.hotels)
    },
    Hotel: {
      id: (hotel) => hotel.id,
      name: (hotel) => hotel.name,
    }
  }
};


module.exports = schema;
