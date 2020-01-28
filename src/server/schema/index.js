const { gql } = require('apollo-server');

const typeDefs = [
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
]

const resolvers = {
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

module.exports = {
  typeDefs,
  resolvers,
}
