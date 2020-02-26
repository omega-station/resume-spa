import gql from 'graphql-tag';

export const GQL_QUERY = gql`
  query {
    options {
      resume {
        aboutIntro
        aboutPoints {
          item
        }
        interestsIntro
        interestsPoints {
          item
        }
        referencesIntro
        metaCopy
      }
    }
  }
`;
