import gql from 'graphql-tag';

export const GQL_QUERY = gql`
  query {
    generalSettings {
      description
      title
    }
    options {
      contact {
        address1
        address2
        email
        phone
      }
    }
  }
`;
