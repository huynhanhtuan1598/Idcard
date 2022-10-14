import { gql } from '@apollo/client';

export const QUERY_GET_ALL_USER_REGISTER = gql`
  query GetAllUsersRegister(
    $page: Float!
    $textSearch: String
    $date: String
    $perPage: Float!
    $status: Boolean
  ) {
    getAllUsersRegister(
      page: $page
      textSearch: $textSearch
      date: $date
      perPage: $perPage
      status: $status
    ) {
      customers {
        _id
        code
        name
        email
        phoneNumber
        address
        status
        createdAt
      }
      count
    }
  }
`;

export const MUTATION_UPDATE_USER_REGISTER = gql`
  mutation UpdateUserRegister(
    $userId: String!
    $name: String
    $email: String
    $address: String
    $phoneNumber: String
    $status: Boolean
  ) {
    updateUserRegister(
      userId: $userId
      name: $name
      email: $email
      address: $address
      phoneNumber: $phoneNumber
      status: $status
    ) {
      _id
      code
      name
      email
      phoneNumber
      address
      status
      createdAt
    }
  }
`;

export const MUTATION_DELETE_USERS_REGISTER = gql`
  mutation DeleteUsersRegister($userIds: [String!]!) {
    deleteUserRegister(userIds: $userIds)
  }
`;
