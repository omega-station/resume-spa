import gql from 'graphql-tag';
import GQL_FRAGMENT from '../../../../utility/graphql/fragment';

export const GQL_QUERY = gql`
  query {
    options {
      ...sectionAbout
      ...sectionInterests
      ...sectionMeta
      ...sectionReferences
    }
  }
  ${GQL_FRAGMENT.OPTIONS.RESUME.SECTION_ABOUT}
  ${GQL_FRAGMENT.OPTIONS.RESUME.SECTION_INTERESTS}
  ${GQL_FRAGMENT.OPTIONS.RESUME.SECTION_META}
  ${GQL_FRAGMENT.OPTIONS.RESUME.SECTION_REFERENCES}
`;
