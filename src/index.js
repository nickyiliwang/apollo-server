const {ApolloServer} = require('apollo-server')
const typeDefs = require('./schema')

const server = new ApolloServer({typeDefs})

server.listen().then(({url}) => {
    console.log(` ground control to major tom 🚀 ${url}`)
})