import { gql } from '@apollo/client';


// get all notes
// get one user
// get one panda


export const QUERY_USER = gql`
  query QueryUser($username: String!) {
    user(username: $username) {
      username
      notes {
        noteText
      }
      pandaEmotion
    }
  }
`;
export const QUERY_ME = gql`
query Query {
  me {
    _id
    username
    pandaEmotion
  }
}
`;