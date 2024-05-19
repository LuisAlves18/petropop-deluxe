const typeDefs = `#graphql
  type User {
    id: ID!
    first_name: String!
    last_name: String!
    email: String!
  }
  
  input NewUserInput {
    first_name: String!
    last_name: String!
    email: String!
  }

  input UpdateUserInput {
    id: ID!
    first_name: String
    last_name: String
    email: String
  }

  type Query {
    users: [User]
  }

  type Mutation {
    createUser(input: NewUserInput!): User
    updateUser(input: UpdateUserInput!): User
    deleteUser(id: ID!): String
  }
`;

export default typeDefs;