const { ApolloServer } = require("apollo-server-micro");
const schema = require("../schema");

const server = new ApolloServer({
  typeDefs: schema.typeDefs,
  resolvers: schema.resolvers,
  cors: true
});

module.exports = server.createHandler({
  path: "/api",
});