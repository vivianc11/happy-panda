const { gql } = require('apollo-server-express');

// someone needs to double check these note and panda syntax
// will need to change if we do emotions instead of notes, but syntax should be correct

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        password: String
        notes: [Note]!
    }

    type note {
        _id: ID
        noteText: String
        noteAuthor: String
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
        addNote(noteText: String!): Note
        addPanda(userId: ID!, ISthisTEXT: String!): User
        removeNote(noteId: ID!): Note
        removePanda(userId: ID!, pandaId: ID!): User
    }
`;

module.exports = typeDefs;