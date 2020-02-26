import gql from 'graphql-tag';

const GQL_FRAGMENT = {
  OPTIONS: {
    CONTACT: gql`
      fragment contact on Options {
        contact {
          address1
          address2
          email
          phone
        }
      }
    `,

    PAGES: gql`
      fragment pages on Options {
        pages {
          items {
            name
            type
          }
          pageFront
        }
      }
    `,

    RESUME: {
      ABOUT: gql`
        fragment about on Options {
          resume {
            aboutHeading
            aboutIntro
            aboutPoints {
              item
            }
          }
        }
      `,

      SKILLSET: gql`
        fragment skillset on Options {
          resume {
            skillsetHeading
            skillsetAreas {
              area
              skills
            }
            skillsetProficiency {
              isVisible
              skill
              proficiency
            }
          }
        }
      `,

      WORK: gql`
        fragment work on Options {
          resume {
            workHeading
            work {
              title
              dates
              intro
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

      EDUCATION: gql`
        fragment education on Options {
          resume {
            educationHeading
            education {
              title
              dates
              points {
                item
              }
            }
          }
        }
      `,

      INTERESTS: gql`
        fragment interests on Options {
          resume {
            interestsHeading
            interestsIntro
            interestsPoints {
              item
            }
          }
        }
      `,

      REFERENCES: gql`
        fragment references on Options {
          resume {
            referencesHeading
            referencesIntro
          }
        }
      `,

      META: gql`
        fragment meta on Options {
          resume {
            metaHeading
            metaCopy
          }
        }
      `,
    },
  },

  SETTINGS: gql`
    fragment settings on GeneralSettings {
      description
      title
    }
  `,
};

export default GQL_FRAGMENT;
