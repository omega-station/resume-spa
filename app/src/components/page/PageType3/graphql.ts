import gql from 'graphql-tag';

export const GQL_QUERY = gql`
  query {
    generalSettings {
      description
      title
    }
    options {
      images {
        header {
          mediaItemUrl
          sizes(size: LARGE)
          srcSet(size: LARGE)
        }
      }
      aside {
        resumeHeading
        resumeImage {
          mediaItemUrl
          sizes(size: LARGE)
          srcSet(size: LARGE)
        }
        resumeUrl {
          ... on MediaItem {
            mediaItemUrl
          }
        }
      }
      resume {
        metaSections {
          name
          heading
        }
      }
    }
  }
`;
