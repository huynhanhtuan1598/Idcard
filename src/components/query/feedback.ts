import { gql } from '@apollo/client';

export const QUERY_GET_ALL_FEEDBACK = gql`
  query GetFeedbackList($page: Float!, $perPage: Float!) {
    getFeedbackList(page: $page, perPage: $perPage) {
      feedbacks {
        _id
        userId {
          hash_url
          fullname
          username
          email
          avatarS3 {
            _id
          }
        }
        content
      }
      count
    }
  }
`;

export const QUERY_FEEDBACK = gql`
  query GetFeedback($feedbackId: String!) {
    getFeedback(feedbackId: $feedbackId) {
      _id
      userId {
        hash_url
        fullname
        username
        email
        avatarS3 {
          _id
        }
      }
      content
    }
  }
`;

export const MUTATION_SEND_FEEDBACK = gql`
  mutation SendFeedback($content: String!, $userId: String!) {
    sendFeedback(content: $content, userId: $userId) {
      _id
      content
    }
  }
`;

export const MUTATION_DELETE_FEEDBACK = gql`
  mutation DeleteFeedback($feedbackId: String!) {
    deleteFeedback(feedbackId: $feedbackId)
  }
`;
