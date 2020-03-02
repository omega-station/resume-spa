import gql from 'graphql-tag';

export const GQL_QUERY = gql`
  query {
    options {
      resume {
        education {
          school
          campus
          location
          dates
          points {
            item
          }
        }
        work {
          title
          company
          location
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
