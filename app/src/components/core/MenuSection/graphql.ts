import gql from 'graphql-tag';

const GQL_QUERY = gql`
  query {
    options {
      resume {
        aboutHeading
        skillsetHeading
        workHeading
        educationHeading
        interestsHeading
        referencesHeading
        metaHeading
      }
    }
  }
`;

export default GQL_QUERY;
