import gql from 'graphql-tag';

const GQL_FRAGMENT = {
  // gqlDefault
  GENERAL_SETTINGS: gql`
    fragment settings on GeneralSettings {
      description
      title
    }
  `,

  OPTIONS: {
    // gqlPages
    PAGES: gql`
      fragment pages on Options {
        pages {
          items {
            isVisible
            name
            type
          }
          pageFront
        }
      }
    `,

    RESUME: {
      // gqlDefault
      CONTACT: gql`
        fragment contact on Options {
          resume {
            contactAddress
            contactCity
            contactEmail
            contactPhone
            contactPostal
          }
        }
      `,

      // gqlDefault
      HEADINGS: gql`
        fragment headings on Options {
          resume {
            aboutHeading
            educationHeading
            interestsHeading
            metaHeading
            referencesHeading
            skillsetHeading
            workHeading
          }
        }
      `,

      // gqlSectionAbout
      SECTION_ABOUT: gql`
        fragment sectionAbout on Options {
          resume {
            aboutHeading
            aboutIntro
            aboutPoints {
              item
            }
          }
        }
      `,

      SECTION_EDUCATION: gql`
        fragment sectionEducation on Options {
          resume {
            educationHeading
            education {
              campus
              dates
              location
              school
              points {
                item
              }
            }
          }
        }
      `,

      // gqlSectionInterests
      SECTION_INTERESTS: gql`
        fragment sectionInterests on Options {
          resume {
            interestsHeading
            interestsIntro
            interestsPoints {
              item
              icon
            }
          }
        }
      `,

      // gqlSectionMeta
      SECTION_META: gql`
        fragment sectionMeta on Options {
          resume {
            metaCopy
            metaHeading
            metaSections {
              name
              heading
            }
          }
        }
      `,

      // gqlDefault
      SECTION_REFERENCES: gql`
        fragment sectionReferences on Options {
          resume {
            referencesHeading
            referencesIntro
          }
          aside {
            resumeHeading
            resumeImage {
              mediaItemUrl
              sizes(size: LARGE)
              srcSet(size: LARGE)
            }
            resumeUrl {
              ... on MediaItem {
                mediaItemUrl
              }
            }
          }
        }
      `,

      SECTION_SKILLSET: gql`
        fragment sectionSkillset on Options {
          resume {
            skillsetHeading
            skillsetAreas {
              area
              skills
            }
            skillsetProficiency {
              isTagcloud
              isVisible
              proficiency
              skill
            }
          }
        }
      `,

      SECTION_WORK: gql`
        fragment sectionWork on Options {
          resume {
            workHeading
            work {
              company
              dates
              intro
              location
              title
              points {
                item
              }
              skillset {
                area
                skills
              }
            }
          }
        }
      `,
    },
  },
};

export default GQL_FRAGMENT;
