import gql from 'graphql-tag';

export type gqlAside = any;
export type gqlResume = any;

export const GQL_QUERY = gql`
  query {
    options {
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
        tagcloudHeading
      }
      resume {
        metaSections {
          name
          heading
        }
        skillsetProficiency {
          count: proficiency
          value: skill
          isTagcloud
        }
      }
    }
  }
`;
