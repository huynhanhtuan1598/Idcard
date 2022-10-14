import { gql } from '@apollo/client';

export const QUERY_GET_ALL_TEMPLATES = gql`
  query GetAllTemplate {
    getAllTemplate {
      templates {
        _id
        title
        template
        type
      }
    }
  }
`;

export const QUERY_GET_ALL_TEMPLATES_USER = gql`
  query GetAllTemplateUser {
    getAllTemplateUser {
      templates {
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
    }
  }
`;

export const QUERY_GET_ALL_TEMPLATES_CUSTOM = gql`
  query GetTemplateCustom($textSearch: String) {
    getTemplateCustom(textSearch: $textSearch) {
      _id
      title
    }
  }
`;

export const QUERY_GET_TEMPLATE = gql`
  query GeTemplate($id: String) {
    geTemplate(id: $id) {
      _id
      title
      template
      color
      colorIcon
      type
      background {
        _id
        url
      }
      backgroundColor
      groupId
    }
  }
`;

export const MUTATION_CREATE_TEMPLATE = gql`
  mutation CreateTemplate(
    $template: String!
    $title: String!
    $type: Float
    $color: String
    $colorIcon: String
    $backgroundColor: String
    $background: String
  ) {
    createTemplate(
      template: $template
      title: $title
      type: $type
      color: $color
      colorIcon: $colorIcon
      backgroundColor: $backgroundColor
      background: $background
    ) {
      _id
      title
      template
      color
      colorIcon
      type
      background {
        url
      }
      backgroundColor
    }
  }
`;

export const MUTATION_UPDATE_TEMPLATE = gql`
  mutation UpdateTemplate(
    $id: String!
    $template: String!
    $color: String
    $colorIcon: String
    $title: String!
    $type: Float
    $background: String
    $backgroundColor: String
    $groupId: String
  ) {
    updateTemplate(
      id: $id
      template: $template
      title: $title
      color: $color
      colorIcon: $colorIcon
      type: $type
      background: $background
      backgroundColor: $backgroundColor
      groupId: $groupId
    ) {
      _id
      title
      template
      color
      colorIcon
      type
      background {
        url
      }
      backgroundColor
      groupId
    }
  }
`;

export const MUTATION_CHANGE_DEFAULT_THEME = gql`
  mutation ChangeDefaultTheme($idTheme: String!) {
    changeDefaultTheme(idTheme: $idTheme) {
      _id
      username
      fullname
      phoneNumber
      description
      email
      address
      type
      career_position
      idRegister
      list {
        _id
        name
        type
        no
        content
        shortName
        owner
        isDefault
      }
      token
      template {
        _id
        template
      }
      defaultTemplate
    }
  }
`;
