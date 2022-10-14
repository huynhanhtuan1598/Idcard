import { gql } from '@apollo/client';

export const QUERY_GET_GOOGLE_FONT = gql`
  query GetGoogleFont {
    getGoogleFont {
      category
      family
      files
      kind
      subsets
      variants
    }
  }
`;
