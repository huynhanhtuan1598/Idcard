import { gql } from '@apollo/client';

export const QUERY_REPORT_OVERVIEW = gql`
  query GetReportOverview($userId: String!, $type: String!, $date: Float!) {
    getReportOverview(userId: $userId, type: $type, date: $date) {
      view
      save
    }
  }
`;

export const QUERY_REPORT_ITEM = gql`
  query GetReportItemContact(
    $userId: String!
    $itemId: String!
    $type: String!
    $date: Float!
  ) {
    getReportItemContact(
      userId: $userId
      itemId: $itemId
      type: $type
      date: $date
    ) {
      label
      count
    }
  }
`;

export const MUTATION_CREATE_REPORT = gql`
  mutation CreateReportUser(
    $userId: String!
    $name: String
    $type: String!
    $itemId: String
  ) {
    createReportUser(userId: $userId, type: $type, name: $name, itemId: $itemId)
  }
`;
