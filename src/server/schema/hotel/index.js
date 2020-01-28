const _ = require('lodash');
const Hotel = require('./Hotel');
const hotels = require('./hotels');

const typeDefs = _.flatten([
  Hotel.typeDefs,
  hotels.typeDefs
]);

const resolvers = _.merge(
  Hotel.resolvers,
  hotels.resolvers
);

module.exports = {
  typeDefs,
  resolvers,
};
