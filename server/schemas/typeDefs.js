const { gql } = require('apollo-server-express');

const typeDefs = gql`

type User {
  _id: ID
  username: String
  email: String
  bookCount: Int
  savedBooks: [Book]
}

 type Book {
   bookId: String
   authors: [String]
   title: String
   description: String
   image: String
   link: String
 }

 type Query {
   me: User
   user(username: String!): User
   users: [User]
 }
 
 type Mutation {
  login(email: String!, password: String!): Auth
  addUser(username: String!, email: String!, password: String!): Auth
  saveBook(bookId: String!, title: String!, description: String!, authors: [String], image: String, link: String): User
  removeBook(bookId: String!): User
 }

 type Auth {
  token: ID!
  user: User
}
`

module.exports = typeDefs;