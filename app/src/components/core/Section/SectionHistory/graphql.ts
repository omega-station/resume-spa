import gql from 'graphql-tag';

export const GQL_QUERY = gql`
  query {
    options {
      resume {
        education {
          title
          dates
          points {
            item
          }
        }
        work {
          title
          dates
          intro
          points {
            item
          }
          skillset {
            area
            skills
          }
        }
      }
    }
  }
`;
