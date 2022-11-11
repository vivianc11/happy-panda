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
        pandaEmotion: String
    }

    type Note {
        _id: ID
        noteText: String
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
        addThought(noteText: String!): Note
        removeNote(noteId: ID!): Note
        updateUser(username: String!, pandaEmotion: String): User
    }
`;

module.exports = typeDefs;