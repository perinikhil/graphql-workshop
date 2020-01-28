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
      hotels: () => ([{
        id: 1,
        name: 'Elmas'
      }])
    },
    Hotel: {
      id: (hotel) => hotel.id,
      name: (hotel) => hotel.name,
    }
  }
};


module.exports = schema;
