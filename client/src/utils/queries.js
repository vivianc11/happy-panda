import { gql } from '@apollo/client';


// get all notes
// get one user
// get one panda


export const QUERY_EMOTIONS = gql`
  query allEmotions {
    emotions {
      _id
      name
      solutions
    }
  }
`;

export const QUERY_SINGLE_EMOTION = gql`
  query singleEmotion($emotionId: ID!) {
    emotion(emotionId: $emotionId) {
      _id
      name
      solution
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      name
      skills
    }
  }
`;