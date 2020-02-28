import gql from 'graphql-tag';

export const GQL_QUERY = gql`
  query {
    generalSettings {
      description
      title
    }
    options {
      resume {
        contactAddress1
        contactAddress2
        contactEmail
        contactPhone
      }
    }
  }
`;
