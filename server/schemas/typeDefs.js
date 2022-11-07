const { gql } = require('apollo-server-express');

// someone needs to double check these reflection and panda syntax

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        password: String
        reflections: [Reflection]!
    }

    type Reflection {
        _id: ID
        reflectionText: String
        reflectionAuthor: String
        createdAt: String
        pandas: [Panda]!
    }

    type Panda {
        _id: ID
        
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        users: [User]
        user(username: String!): User
        pandas(username: String): [Panda]
        panda(pandaId: ID!): Panda
        me: User
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
        addReflection(reflectionText: String!): Reflection
        addPanda(userId: ID!, ISthisTEXT: String!): User
        removeReflection(reflectionId: ID!): Reflection
        removePanda(userId: ID!, pandaId: ID!): User
    }
`;

module.exports = typeDefs;