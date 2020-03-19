import gql from 'graphql-tag';
import GQL_FRAGMENT from '../../../../utility/graphql/fragment';

export const GQL_QUERY = gql`
  query {
    options {
      ...sectionSkillset
    }
  }
  ${GQL_FRAGMENT.OPTIONS.RESUME.SECTION_SKILLSET}
`;
