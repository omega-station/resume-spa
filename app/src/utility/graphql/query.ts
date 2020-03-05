import gql from 'graphql-tag';

const GQL_QUERY = {
  GLOBAL: gql`
    query {
      generalSettings {
        title
        description
      }
      options {
        pages {
          items {
            isVisible
            name
            type
          }
          pageFront
        }
        resume {
          contactAddress1
          contactAddress2
          contactEmail
          contactPhone

          aboutHeading
          aboutIntro
          aboutPoints {
            item
          }

          educationHeading
          education {
            campus
            dates
            location
            points {
              item
            }
            school
          }

          interestsHeading
          interestsIntro
          interestsPoints {
            item
          }

          metaCopy
          metaHeading

          referencesHeading
          referencesIntro

          skillsetHeading
          skillsetAreas {
            area
            skills
          }
          skillsetProficiency {
            isVisible
            proficiency
            skill
          }

          workHeading
          work {
            company
            dates
            intro
            location
            title
            skillset {
              skills
              area
            }
            points {
              item
            }
          }
        }
      }
    }
  `,

  PAGE: gql`
    query {
      options {
        pages {
          items {
            isVisible
            name
            type
          }
          pageFront
        }
      }
    }
  `,

  SECTION_HEADING: gql`
    query {
      options {
        resume {
          aboutHeading
          skillsetHeading
          workHeading
          educationHeading
          interestsHeading
          referencesHeading
          metaHeading
        }
      }
    }
  `,
};

export default GQL_QUERY;
