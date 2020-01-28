const { gql } = require('apollo-server');

const typeDefs = gql`
  type Hotel {
    id: ID!,
    name: String!
  }
`

const resolvers = {
  Hotel: {
    id: (hotel) => hotel.id,
    name: (hotel) => hotel.name,
  }
}

module.exports = {
  typeDefs,
  resolvers,
}
