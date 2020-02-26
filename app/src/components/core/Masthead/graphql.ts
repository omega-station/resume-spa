import gql from 'graphql-tag';

export const GQL_QUERY = gql`
  query {
    generalSettings {
      title
      description
    }
  }
`;
