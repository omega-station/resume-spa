import gql from 'graphql-tag';

export type gqlAside = any;
export type gqlResume = any;

export const GQL_QUERY = gql`
  query {
    options {
      pageContent {
        pagetype2Images {
          mediaItemUrl
          sizes(size: LARGE)
          srcSet(size: LARGE)
          title
        }
      }
    }
  }
`;
