import { gql } from '@apollo/client';

export const MUTATION_SOFT_CONTACT = gql`
  mutation SortAddress($startIndex: String!, $endIndex: String!) {
    sortAddress(startIndex: $startIndex, endIndex: $endIndex) {
      _id
      token
    }
  }
`;

export const MUTATION_ADD_CONTACT = gql`
  mutation AddInfo(
    $type: String!
    $content: String!
    $name: String!
    $owner: String
    $shortName: String
  ) {
    addInfo(
      type: $type
      content: $content
      name: $name
      owner: $owner
      shortName: $shortName
    ) {
      _id
      fullname
      username
      description
      phoneNumber
      email
      address
      avatarS3 {
        url
        userId
        _id
        key
      }
      career_position

      list {
        _id
        name
        no
        type
        content
        owner
        shortName
        isDefault
      }
      token
      defaultTemplate
      hash_url
    }
  }
`;

export const MUTATION_REMOVE_CONTACT = gql`
  mutation RemoveContact($id: String!) {
    removeInfo(id: $id) {
      _id
      fullname
      username
      description
      phoneNumber
      email
      address

      avatarS3 {
        url
        userId
        _id
        key
      }
      career_position

      list {
        _id
        name
        no
        content
        type
        owner
        shortName
        isDefault
      }
      token
      defaultTemplate
      hash_url
    }
  }
`;

export const MUTATION_HIDE_CONTACT = gql`
  mutation HideContact($id: String!, $visible: Boolean!) {
    toggleHideContact(id: $id, visible: $visible) {
      _id
      fullname
      username
      description
      phoneNumber
      email
      address

      avatarS3 {
        url
        userId
        _id
        key
      }
      career_position

      list {
        _id
        name
        no
        content
        type
        owner
        shortName
        isDefault
      }
      token
      defaultTemplate
      hash_url
    }
  }
`;

export const MUTATION_EDIT_CONTACT = gql`
  mutation EditContact(
    $id: String!
    $content: String!
    $owner: String
    $shortName: String
  ) {
    editContact(
      id: $id
      content: $content
      owner: $owner
      shortName: $shortName
    ) {
      _id
      fullname
      username
      description
      phoneNumber
      email
      address

      avatarS3 {
        url
        userId
        _id
        key
      }
      career_position

      list {
        _id
        name
        no
        content
        type
        owner
        shortName
        isDefault
      }
      token
      defaultTemplate
      hash_url
    }
  }
`;

export const MUTATION_TOGGLE_DEFAULT_WEBSITE = gql`
  mutation ToggleDefaultWebsite($id: String!, $isDefault: Boolean!) {
    toggleDefaultWebsite(id: $id, isDefault: $isDefault) {
      _id
      fullname
      username
      description
      phoneNumber
      email
      address

      avatarS3 {
        url
        userId
        _id
        key
      }
      career_position
      list {
        _id
        name
        no
        content
        type
        owner
        shortName
        isDefault
      }
      token
      defaultTemplate
      hash_url
    }
  }
`;
