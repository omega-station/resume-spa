import { GQL_QUERY } from './graphql';

const mocks = [
  {
    request: {
      query: GQL_QUERY,
    },
    result: {
      data: {
        options: {
          pageContent: {
            pagetype3Images: [
              {
                mediaItemUrl: 'http://dev.resume-wp.omegastation.ca/wp-content/uploads/time-lapse-photo-of-stars-on-night-924824.jpg',
                sizes: '(max-width: 1024px) 100vw, 1024px',
                srcSet:
                  'http://dev.resume-wp.omegastation.ca/wp-content/uploads/time-lapse-photo-of-stars-on-night-924824-1024x171.jpg 1024w, http://dev.resume-wp.omegastation.ca/wp-content/uploads/time-lapse-photo-of-stars-on-night-924824-300x50.jpg 300w, http://dev.resume-wp.omegastation.ca/wp-content/uploads/time-lapse-photo-of-stars-on-night-924824-768x128.jpg 768w, http://dev.resume-wp.omegastation.ca/wp-content/uploads/time-lapse-photo-of-stars-on-night-924824.jpg 1440w',
              },
              {
                mediaItemUrl: 'http://dev.resume-wp.omegastation.ca/wp-content/uploads/abstract-abstract-background-art-art-background-374609.jpg',
                sizes: '(max-width: 1024px) 100vw, 1024px',
                srcSet:
                  'http://dev.resume-wp.omegastation.ca/wp-content/uploads/abstract-abstract-background-art-art-background-374609-1024x171.jpg 1024w, http://dev.resume-wp.omegastation.ca/wp-content/uploads/abstract-abstract-background-art-art-background-374609-300x50.jpg 300w, http://dev.resume-wp.omegastation.ca/wp-content/uploads/abstract-abstract-background-art-art-background-374609-768x128.jpg 768w, http://dev.resume-wp.omegastation.ca/wp-content/uploads/abstract-abstract-background-art-art-background-374609.jpg 1440w',
              },
              {
                mediaItemUrl: 'http://dev.resume-wp.omegastation.ca/wp-content/uploads/black-ceiling-wall-161043.jpg',
                sizes: '(max-width: 1024px) 100vw, 1024px',
                srcSet:
                  'http://dev.resume-wp.omegastation.ca/wp-content/uploads/black-ceiling-wall-161043-1024x171.jpg 1024w, http://dev.resume-wp.omegastation.ca/wp-content/uploads/black-ceiling-wall-161043-300x50.jpg 300w, http://dev.resume-wp.omegastation.ca/wp-content/uploads/black-ceiling-wall-161043-768x128.jpg 768w, http://dev.resume-wp.omegastation.ca/wp-content/uploads/black-ceiling-wall-161043.jpg 1440w',
              },
              {
                mediaItemUrl: 'http://dev.resume-wp.omegastation.ca/wp-content/uploads/abstract-art-blur-circle-96381.jpg',
                sizes: '(max-width: 1024px) 100vw, 1024px',
                srcSet:
                  'http://dev.resume-wp.omegastation.ca/wp-content/uploads/abstract-art-blur-circle-96381-1024x171.jpg 1024w, http://dev.resume-wp.omegastation.ca/wp-content/uploads/abstract-art-blur-circle-96381-300x50.jpg 300w, http://dev.resume-wp.omegastation.ca/wp-content/uploads/abstract-art-blur-circle-96381-768x128.jpg 768w, http://dev.resume-wp.omegastation.ca/wp-content/uploads/abstract-art-blur-circle-96381.jpg 1440w',
              },
              {
                mediaItemUrl: 'http://dev.resume-wp.omegastation.ca/wp-content/uploads/photo-of-multicolored-illustration-2832382.jpg',
                sizes: '(max-width: 1024px) 100vw, 1024px',
                srcSet:
                  'http://dev.resume-wp.omegastation.ca/wp-content/uploads/photo-of-multicolored-illustration-2832382-1024x171.jpg 1024w, http://dev.resume-wp.omegastation.ca/wp-content/uploads/photo-of-multicolored-illustration-2832382-300x50.jpg 300w, http://dev.resume-wp.omegastation.ca/wp-content/uploads/photo-of-multicolored-illustration-2832382-768x128.jpg 768w, http://dev.resume-wp.omegastation.ca/wp-content/uploads/photo-of-multicolored-illustration-2832382.jpg 1440w',
              },
              {
                mediaItemUrl: 'http://dev.resume-wp.omegastation.ca/wp-content/uploads/photo-of-abstract-colors-2798881.jpg',
                sizes: '(max-width: 1024px) 100vw, 1024px',
                srcSet:
                  'http://dev.resume-wp.omegastation.ca/wp-content/uploads/photo-of-abstract-colors-2798881-1024x171.jpg 1024w, http://dev.resume-wp.omegastation.ca/wp-content/uploads/photo-of-abstract-colors-2798881-300x50.jpg 300w, http://dev.resume-wp.omegastation.ca/wp-content/uploads/photo-of-abstract-colors-2798881-768x128.jpg 768w, http://dev.resume-wp.omegastation.ca/wp-content/uploads/photo-of-abstract-colors-2798881.jpg 1440w',
              },
              {
                mediaItemUrl: 'http://dev.resume-wp.omegastation.ca/wp-content/uploads/color-text-1279813.jpg',
                sizes: '(max-width: 1024px) 100vw, 1024px',
                srcSet:
                  'http://dev.resume-wp.omegastation.ca/wp-content/uploads/color-text-1279813-1024x171.jpg 1024w, http://dev.resume-wp.omegastation.ca/wp-content/uploads/color-text-1279813-300x50.jpg 300w, http://dev.resume-wp.omegastation.ca/wp-content/uploads/color-text-1279813-768x128.jpg 768w, http://dev.resume-wp.omegastation.ca/wp-content/uploads/color-text-1279813.jpg 1440w',
              },
            ],
            pagetype3AsideHeading: [
              {
                heading: "Things I'm Good At",
              },
              {
                heading: 'Download PDF',
              },
            ],
            pagetype3AsideIcon: [
              {
                icon: 'far-file-pdf',
              },
              {
                icon: 'fas-file-pdf',
              },
            ],
          },
          resume: {
            metaSections: [
              {
                name: 'about',
                heading: 'A Little About Me',
              },
              {
                name: 'skillset',
                heading: 'What I Do Best',
              },
              {
                name: 'work',
                heading: 'Work History',
              },
              {
                name: 'education',
                heading: 'Education',
              },
              {
                name: 'interests',
                heading: 'Interests',
              },
              {
                name: 'references',
                heading: 'References / PDF',
              },
              {
                name: 'meta',
                heading: 'About This Website',
              },
            ],
            referencesResume: [
              {
                url: {
                  mediaItemUrl: 'http://dev.resume-wp.omegastation.ca/wp-content/uploads/resume_paul-kevin-koehler.pdf',
                },
              },
            ],
            skillsetProficiency: [
              {
                count: 95,
                value: 'HTML5',
                isTagcloud: true,
              },
              {
                count: 95,
                value: 'CSS3',
                isTagcloud: true,
              },
              {
                count: 80,
                value: 'JavaScript ES6+',
                isTagcloud: true,
              },
              {
                count: 80,
                value: 'React',
                isTagcloud: true,
              },
              {
                count: 95,
                value: 'Styled Components',
                isTagcloud: true,
              },
              {
                count: 75,
                value: 'GraphQL',
                isTagcloud: true,
              },
              {
                count: 75,
                value: 'TypeScript',
                isTagcloud: true,
              },
              {
                count: 95,
                value: 'WordPress',
                isTagcloud: true,
              },
              {
                count: 70,
                value: 'Redux',
                isTagcloud: true,
              },
              {
                count: 70,
                value: 'PHP',
                isTagcloud: true,
              },
              {
                count: 70,
                value: 'Perl',
                isTagcloud: true,
              },
              {
                count: 60,
                value: 'Jest/Enzyme',
                isTagcloud: true,
              },
              {
                count: 50,
                value: 'Formik',
                isTagcloud: true,
              },
              {
                count: 90,
                value: 'Storybook',
                isTagcloud: true,
              },
              {
                count: 70,
                value: 'Webpack',
                isTagcloud: true,
              },
              {
                count: 75,
                value: 'MySQL',
                isTagcloud: true,
              },
              {
                count: 60,
                value: 'PostgreSQL',
                isTagcloud: true,
              },
              {
                count: 60,
                value: 'Parcel',
                isTagcloud: true,
              },
              {
                count: 60,
                value: 'Docker',
                isTagcloud: true,
              },
              {
                count: 80,
                value: 'Lando',
                isTagcloud: true,
              },
            ],
          },
        },
      },
    },
  },
];

export default mocks;
