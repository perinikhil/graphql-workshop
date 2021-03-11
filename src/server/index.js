require("isomorphic-fetch");
const { ApolloServer } = require("apollo-server");
const schema = require("./schema");

const server = new ApolloServer({
  typeDefs: schema.typeDefs,
  resolvers: schema.resolvers,
  cors: true
});

server.listen().then(({ url }) => {
  console.log(`🚀 GraphQL Server ready at ${url}`);
});
