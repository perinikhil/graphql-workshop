const { gql } = require('apollo-server');

const typeDefs = gql`
  extend type Query {
    hotels: [Hotel!]!
  }
`

const resolvers = {
  Query: {
    hotels: () => ([{
      id: 1,
      name: 'Elmas'
    }])
  }
}

module.exports = {
  typeDefs,
  resolvers,
}
