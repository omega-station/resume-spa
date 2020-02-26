import gql from 'graphql-tag';

export const GQL_QUERY = gql`
  query {
    options {
      resume {
        skillsetHeading
        skillsetAreas {
          area
          skills
        }
        skillsetProficiency {
          isVisible
          skill
          proficiency
        }
      }
    }
  }
`;
