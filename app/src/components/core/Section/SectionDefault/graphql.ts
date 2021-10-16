import gql from 'graphql-tag';
import GQL_FRAGMENT from 'utility/graphql/fragment';

export const GQL_QUERY = gql`
  query {
    generalSettings {
      ...settings
    }
    options {
      ...pageContent
      ...sectionAbout
      ...sectionInterests
      ...sectionMeta
      ...sectionReferences
    }
  }
  ${GQL_FRAGMENT.GENERAL_SETTINGS}
  ${GQL_FRAGMENT.OPTIONS.PAGE_CONTENT}
  ${GQL_FRAGMENT.OPTIONS.RESUME.SECTION_ABOUT}
  ${GQL_FRAGMENT.OPTIONS.RESUME.SECTION_INTERESTS}
  ${GQL_FRAGMENT.OPTIONS.RESUME.SECTION_META}
  ${GQL_FRAGMENT.OPTIONS.RESUME.SECTION_REFERENCES}
`;
