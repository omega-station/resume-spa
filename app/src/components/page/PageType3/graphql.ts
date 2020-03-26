import gql from 'graphql-tag';

export type gqlAside = any;
export type gqlResume = any;

export const GQL_QUERY = gql`
  query {
    options {
      pageContent {
        pagetype3AsideHeading {
          heading
        }
        pagetype3AsideIcon {
          icon
        }
      }
      resume {
        metaSections {
          name
          heading
        }
        referencesResume {
          pdf {
            ... on MediaItem {
              mediaItemUrl
            }
          }
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
