import gql from 'graphql-tag';
import GQL_FRAGMENT from './fragment';

const GQL_QUERY = {
  GLOBAL: gql`
    query {
      generalSettings {
        ...settings
      }
      options {
        ...pages
        ...contact
        ...sectionAbout
        ...sectionEducation
        ...sectionInterests
        ...sectionMeta
        ...sectionReferences
        ...sectionSkillset
        ...sectionWork
      }
    }
    ${GQL_FRAGMENT.GENERAL_SETTINGS}
    ${GQL_FRAGMENT.OPTIONS.PAGES}
    ${GQL_FRAGMENT.OPTIONS.RESUME.CONTACT}
    ${GQL_FRAGMENT.OPTIONS.RESUME.SECTION_ABOUT}
    ${GQL_FRAGMENT.OPTIONS.RESUME.SECTION_EDUCATION}
    ${GQL_FRAGMENT.OPTIONS.RESUME.SECTION_INTERESTS}
    ${GQL_FRAGMENT.OPTIONS.RESUME.SECTION_META}
    ${GQL_FRAGMENT.OPTIONS.RESUME.SECTION_REFERENCES}
    ${GQL_FRAGMENT.OPTIONS.RESUME.SECTION_SKILLSET}
    ${GQL_FRAGMENT.OPTIONS.RESUME.SECTION_WORK}
  `,

  PAGES: gql`
    query {
      options {
        ...pages
      }
    }
    ${GQL_FRAGMENT.OPTIONS.PAGES}
  `,

  HEADINGS: gql`
    query {
      options {
        ...headings
      }
    }
    ${GQL_FRAGMENT.OPTIONS.RESUME.HEADINGS}
  `,

  SETTINGS: gql`
    query {
      generalSettings {
        ...settings
      }
    }
    ${GQL_FRAGMENT.GENERAL_SETTINGS}
  `,
};

export default GQL_QUERY;
