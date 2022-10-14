import { gql } from '@apollo/client';

export const MUTATION_CREATE_INVITE_GROUP = gql`
  mutation CreateInviteGroup($groupId: String!, $userId: String!) {
    createInviteGroup(groupId: $groupId, userId: $userId)
  }
`;

export const MUTATION_REMOVE_INVITE_GROUP = gql`
  mutation RemoveInviteGroup(
    $inviteGroupId: String!
    $groupId: String!
    $userId: String!
    $confirm: Boolean
  ) {
    removeInviteGroup(
      inviteGroupId: $inviteGroupId
      groupId: $groupId
      userId: $userId
      confirm: $confirm
    )
  }
`;

export const QUERY_GET_INVITE_GROUP_USER = gql`
  query GetInviteGroupUser {
    getInviteGroupUser {
      _id
      groupId {
        _id
        title
        avatar {
          url
        }
      }
      userId {
        _id
        fullname
      }
      inviteUserId {
        _id
        fullname
      }
      createdAt
    }
  }
`;

export const QUERY_GET_INVITE_OF_GROUP = gql`
  query GetInviteOfGroup($groupId: String!) {
    getInviteOfGroup(groupId: $groupId) {
      _id
      groupId {
        _id
        title
      }
      userId {
        _id
        fullname
      }
      inviteUserId {
        _id
        fullname
      }
      createdAt
    }
  }
`;
