import gql from 'graphql-tag';
import GQL_FRAGMENT from 'utility/graphql/fragment';

export const GQL_QUERY = gql`
  query {
    generalSettings {
      ...settings
    }
    options {
      pageContent {
        pagetype3Images {
          mediaItemUrl
          sizes(size: LARGE)
          srcSet(size: LARGE)
        }
      }
      resume {
        metaSections {
          name
          heading
        }
      }
    }
  }
  ${GQL_FRAGMENT.GENERAL_SETTINGS}
`;
