import gql from 'graphql-tag';

export type gqlAside = any;
export type gqlResume = any;

export const GQL_QUERY = gql`
  query {
    options {
      pageContent {
        pagetype2ImagesFooter0 {
          mediaItemUrl
          sizes(size: LARGE)
          srcSet(size: LARGE)
          title
        }
        pagetype2ImagesFooter1 {
          mediaItemUrl
          sizes(size: LARGE)
          srcSet(size: LARGE)
          title
        }
        pagetype2ImagesFooter2 {
          mediaItemUrl
          sizes(size: LARGE)
          srcSet(size: LARGE)
          title
        }
      }
    }
  }
`;
