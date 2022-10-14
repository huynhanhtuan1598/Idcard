import { gql } from '@apollo/client';

export const MUTATION_CREATE_IMAGE = gql`
  mutation CreateImage(
    $title: String!
    $url: String!
    $delete_url: String!
    $userId: String!
  ) {
    createImage(
      title: $title
      url: $url
      delete_url: $delete_url
      userId: $userId
    ) {
      _id
      title
      url
      delete_url
      userId
    }
  }
`;

export const MUTATION_CREATE_IMAGE_S3 = gql`
  mutation CreateImageS3(
    $url: String!
    $key: String!
    $userId: String
    $type: String
  ) {
    createImageS3(url: $url, key: $key, userId: $userId, type: $type) {
      _id
      key
      url
      userId
    }
  }
`;

export const QUERY_GET_IMAGES = gql`
  query GetImages {
    getImages {
      _id
      title
      url
      delete_url
      userId
    }
  }
`;

export const QUERY_GET_IMAGES_S3 = gql`
  query GetImagesS3 {
    getImagesS3 {
      _id
      key
      url
      userId
    }
  }
`;

export const QUERY_GET_BACKGROUNDS_S3 = gql`
  query GetBackgroundsS3 {
    getBackgroundsS3 {
      _id
      key
      url
      userId
    }
  }
`;

export const MUTATION_GET_IMAGES = gql`
  {
    createImage(
      title: $title
      url: $url
      delete_url: $delete_url
      userId: $userId
    ) {
      _id
      title
      url
      delete_url
      userId
    }
  }
`;

export const QUERY_GET_IMAGE = gql`
  query GetImage($idImageS3: String) {
    getImage(idImageS3: $idImageS3) {
      _id
      key
      url
      userId
    }
  }
`;
