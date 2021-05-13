const {ApolloServer} = require('apollo-server')
const { readFileSync } = require('fs')
const typeDefs = readFileSync('./typedefs.graphql').toString('utf-8')
const resolvers = require('./resolvers')

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
