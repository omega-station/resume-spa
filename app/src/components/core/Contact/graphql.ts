import gql from 'graphql-tag';

export const GQL_QUERY = gql`
  query {
    generalSettings {
      description
      title
    }
    options {
      resume {
        contactAddress
        contactCity
        contactEmail
        contactPhone
        contactPostal
      }
    }
  }
`;
