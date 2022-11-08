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
        pandas: [Panda]!
    }

    type Note {
        _id: ID
        noteText: String
        noteAuthor: String
    }

    type Panda {
        _id: ID
        pandaEmotion: String
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        user(username: String!): User
        me: User
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
        addNote(noteText: String!): Note
        updatePanda(userId: ID!, pandaEmotion: String!): User
        removeNote(noteId: ID!): Note
    }
`;

module.exports = typeDefs;