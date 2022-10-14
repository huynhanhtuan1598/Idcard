import { gql } from '@apollo/client';

export const QUERY_GET_ALL_CUSTOMERS = gql`
  query GetAllCustomers(
    $textSearch: String
    $date: String
    $page: Float!
    $perPage: Float!
  ) {
    getAllCustomers(
      textSearch: $textSearch
      date: $date
      page: $page
      perPage: $perPage
    ) {
      customers {
        _id
        fullname
        username
        email
        hash_url
        idRegister
        avatarS3 {
          url
          userId
          _id
          key
        }
        isDeleted
        createdAt
      }
      count
    }
  }
`;

export const QUERY_GET_CUSTOMER = gql`
  query GetCustomer($id: String!) {
    getCustomer(id: $id) {
      _id
      username
      fullname
      phoneNumber
      description
      email
      address
      career_position
      defaultTemplate
      avatarS3 {
        url
        userId
        _id
        key
      }

      list {
        _id
        name
        type
        no
        content
        owner
        shortName
        isDefault
      }
      template {
        _id
        template
        color
        colorIcon
        backgroundColor
        type
      }
      themeConfig {
        backgroundImage
        backgroundColor
        color
        colorIcon
        fontFamily
      }
    }
  }
`;
