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
      hotels: () => fetch('http://localhost:5000/api/hotels/')
        .then((res) => res.json())
    },
    Hotel: {
      id: (hotel) => hotel.id,
      name: (hotel) => hotel.name,
    }
  }
};


module.exports = schema;
