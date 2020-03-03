import gql from 'graphql-tag';

const GQL_QUERY = {
  PAGE: gql`
    query {
      options {
        pages {
          items {
            isVisible
            name
            type
          }
          pageFront
        }
      }
    }
  `,

  SECTION_HEADING: gql`
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
  `,
};

export default GQL_QUERY;
