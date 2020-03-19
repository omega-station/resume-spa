import gql from 'graphql-tag';
import GQL_FRAGMENT from '../../../../utility/graphql/fragment';

export const GQL_QUERY = gql`
  query {
    options {
      ...sectionEducation
      ...sectionWork
    }
  }
  ${GQL_FRAGMENT.OPTIONS.RESUME.SECTION_EDUCATION}
  ${GQL_FRAGMENT.OPTIONS.RESUME.SECTION_WORK}
`;
