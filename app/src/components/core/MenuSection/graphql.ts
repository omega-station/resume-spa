import gql from 'graphql-tag';
import GQL_FRAGMENT from '../../../utility/graphql/fragment';

const GQL_QUERY = gql`
  query {
    options {
      ...headings
    }
  }
  ${GQL_FRAGMENT.OPTIONS.RESUME.HEADINGS}
`;

export default GQL_QUERY;
