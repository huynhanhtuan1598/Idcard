import { gql } from '@apollo/client';

export const MUTATION_CREATE_GROUP = gql`
  mutation CreateGroup(
    $title: String!
    $ownerId: String!
    $templateId: String
    $members: [String!]
  ) {
    createGroup(
      title: $title
      ownerId: $ownerId
      templateId: $templateId
      members: $members
    ) {
      _id
      title
      ownerId {
        _id
        fullname
      }
      members {
        _id
        fullname
      }
      createdAt
    }
  }
`;

export const MUTATION_UPDATE_GROUP = gql`
  mutation UpdateGroup(
    $groupId: String!
    $title: String!
    $ownerId: String!
    $templateId: String
    $members: [String!]
  ) {
    updateGroup(
      groupId: $groupId
      title: $title
      ownerId: $ownerId
      templateId: $templateId
      members: $members
    ) {
      _id
      title
      ownerId {
        _id
        fullname
      }
      members {
        _id
        fullname
      }
      createdAt
    }
  }
`;

export const QUERY_GET_ALL_GROUPS = gql`
  query GetAllGroups(
    $textSearch: String
    $date: String
    $page: Float!
    $perPage: Float!
  ) {
    getAllGroups(
      textSearch: $textSearch
      date: $date
      page: $page
      perPage: $perPage
    ) {
      count
      groups {
        _id
        title
        ownerId {
          _id
          fullname
          idRegister
          hash_url
          avatarS3 {
            url
          }
        }
        members {
          _id
          fullname
          idRegister
          hash_url
          avatarS3 {
            url
          }
        }
        templateId {
          _id
          title
          template
          type
          background {
            _id
            url
          }
          backgroundColor
          color
          colorIcon
        }
        createdAt
      }
    }
  }
`;

export const QUERY_GROUPS_CUSTOMER = gql`
  query GetGroupsCustomer {
    getGroupsCustomer {
      _id
      title
      ownerId {
        _id
      }
      members {
        _id
        fullname
        idRegister
        hash_url
        avatarS3 {
          url
        }
      }
    }
  }
`;

export const QUERY_GROUP = gql`
  query GetGroup($id: String!) {
    getGroup(id: $id) {
      _id
      title
      ownerId {
        _id
        fullname
        idRegister
        hash_url
        avatarS3 {
          url
        }
      }
      members {
        _id
        fullname
        idRegister
        hash_url
        avatarS3 {
          url
        }
      }
      templateId {
        _id
        title
        template
        type
        background {
          _id
          url
        }
        backgroundColor
        color
        colorIcon
      }
      createdAt
    }
  }
`;

export const MUTATION_DELETE_GROUP = gql`
  mutation DeleteGroup($groupId: String!) {
    deleteGroup(groupId: $groupId)
  }
`;

export const MUTATION_REMOVE_MEMBER_GROUP = gql`
  mutation RemoveMemberGroup($groupId: String!, $memberId: String!) {
    removeMemberGroup(groupId: $groupId, memberId: $memberId)
  }
`;
