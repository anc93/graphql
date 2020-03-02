const { ApolloServer } = require('apollo-server');

const typeDefs = require('./schema/schema2')

const server = new ApolloServer({ typeDefs });

server.listen().then(({ url }) => {
  console.log("bahhhhhhhhhhhhhh");
  console.log('🚀 Server ready at ${url}');
});