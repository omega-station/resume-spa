import gql from 'graphql-tag';
import GQL_FRAGMENT from '../../../utility/graphql/fragment';

export const GQL_QUERY = gql`
  query {
    generalSettings {
      ...settings
    }
    options {
      ...contact
    }
  }
  ${GQL_FRAGMENT.GENERAL_SETTINGS}
  ${GQL_FRAGMENT.OPTIONS.RESUME.CONTACT}
`;
