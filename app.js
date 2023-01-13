const express=require('express')
const {graphqlHTTP}=require('express-graphql')
const gqlSchema = require('./graphql/schema')
const Resolver = require('./graphql/resolvers')
const app=express()

app.use('/graphql',graphqlHTTP({
    schema: gqlSchema,
    rootValue: Resolver,
    graphiql: true
}))

app.listen(3000)