require('isomorphic-fetch');
require('./mocks');
const { ApolloServer } = require('apollo-server');
const schema = require('./schema');

const server = new ApolloServer(schema);

server.listen().then(({ url }) => {
  console.log(`🚀 GraphQL Server ready at ${url}`);
});
