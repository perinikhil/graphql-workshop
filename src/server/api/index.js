const { ApolloServer } = require("apollo-server-micro");
const cors = require('micro-cors')();
const { send } = require('micro');
const schema = require("../schema");

const apolloServer = new ApolloServer({
  typeDefs: schema.typeDefs,
  resolvers: schema.resolvers,
  introspection: true,
  playground: true,
});

const apolloServerHandler = apolloServer.createHandler({
  path: "/api",
}); 

const handler = (req, res) => {
  if (req.method === 'OPTIONS') {
    return send(res, 200, 'ok!');
  }
  return apolloServerHandler(req, res);
}

module.exports = cors(handler);
