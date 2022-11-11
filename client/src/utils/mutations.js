import { gql } from '@apollo/client';

// add a note
// delete a note
// edit emotion
// edit hunger
// edit potty
// edit tired

export const ADD_THOUGHT = gql`
mutation addThought($noteText: String!) {
  addThought(noteText: $noteText) {
    noteText
    _id
  }
}
`;
export const UPDATE_USER = gql`
mutation UpdateUser($username: String!, $pandaEmotion: String) {
  updateUser(username: $username, pandaEmotion: $pandaEmotion) {
    pandaEmotion
    username
  }
}`;

export const REMOVE_NOTE = gql`
  mutation RemoveNote($noteText: String!, $noteId: ID!) {
    removeNote(noteId: $noteId) {
      noteText
    }
  }
`;



export const ADD_USER = gql`
  mutation AddUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        email
        username
        password
        pandaEmotion
      }
    }
  }
`;

export const LOGIN_USER = gql`
mutation loginUser($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    user {
      _id
      username
    }
  }
}
`; 
