const { gql } = require('apollo-server');
const _ = require('lodash');
const hotel = require('./hotel');

const typeDefs = _.flatten([
  gql`
    type Query
  `,
  hotel.typeDefs
])

const resolvers = _.merge(
  hotel.resolvers
)

module.exports = {
  typeDefs,
  resolvers,
}
