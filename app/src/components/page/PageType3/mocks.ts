import { GQL_QUERY } from './graphql';

const mocks = [
  {
    request: {
      query: GQL_QUERY,
    },
    result: {
      data: {
        generalSettings: {
          description: 'Web Developer Extraordinaire',
          title: 'Paul Kevin Koehler',
        },
        options: {
          images: {
            header: [
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
              {
                mediaItemUrl: 'http://dev.resume-wp.omegastation.ca/wp-content/uploads/defocused-image-of-lights-255379.jpg',
                sizes: '(max-width: 1024px) 100vw, 1024px',
                srcSet:
                  'http://dev.resume-wp.omegastation.ca/wp-content/uploads/defocused-image-of-lights-255379-1024x171.jpg 1024w, http://dev.resume-wp.omegastation.ca/wp-content/uploads/defocused-image-of-lights-255379-300x50.jpg 300w, http://dev.resume-wp.omegastation.ca/wp-content/uploads/defocused-image-of-lights-255379-768x128.jpg 768w, http://dev.resume-wp.omegastation.ca/wp-content/uploads/defocused-image-of-lights-255379.jpg 1440w',
              },
              {
                mediaItemUrl: 'http://dev.resume-wp.omegastation.ca/wp-content/uploads/blurry-photo-of-lights-1266818.jpg',
                sizes: '(max-width: 1024px) 100vw, 1024px',
                srcSet:
                  'http://dev.resume-wp.omegastation.ca/wp-content/uploads/blurry-photo-of-lights-1266818-1024x171.jpg 1024w, http://dev.resume-wp.omegastation.ca/wp-content/uploads/blurry-photo-of-lights-1266818-300x50.jpg 300w, http://dev.resume-wp.omegastation.ca/wp-content/uploads/blurry-photo-of-lights-1266818-768x128.jpg 768w, http://dev.resume-wp.omegastation.ca/wp-content/uploads/blurry-photo-of-lights-1266818.jpg 1440w',
              },
              {
                mediaItemUrl: 'http://dev.resume-wp.omegastation.ca/wp-content/uploads/bokeh-of-lights-photography-1210276.jpg',
                sizes: '(max-width: 1024px) 100vw, 1024px',
                srcSet:
                  'http://dev.resume-wp.omegastation.ca/wp-content/uploads/bokeh-of-lights-photography-1210276-1024x171.jpg 1024w, http://dev.resume-wp.omegastation.ca/wp-content/uploads/bokeh-of-lights-photography-1210276-300x50.jpg 300w, http://dev.resume-wp.omegastation.ca/wp-content/uploads/bokeh-of-lights-photography-1210276-768x128.jpg 768w, http://dev.resume-wp.omegastation.ca/wp-content/uploads/bokeh-of-lights-photography-1210276.jpg 1440w',
              },
              {
                mediaItemUrl: 'http://dev.resume-wp.omegastation.ca/wp-content/uploads/abstract-painting-with-red-and-blue-colors-3435249.jpg',
                sizes: '(max-width: 1024px) 100vw, 1024px',
                srcSet:
                  'http://dev.resume-wp.omegastation.ca/wp-content/uploads/abstract-painting-with-red-and-blue-colors-3435249-1024x171.jpg 1024w, http://dev.resume-wp.omegastation.ca/wp-content/uploads/abstract-painting-with-red-and-blue-colors-3435249-300x50.jpg 300w, http://dev.resume-wp.omegastation.ca/wp-content/uploads/abstract-painting-with-red-and-blue-colors-3435249-768x128.jpg 768w, http://dev.resume-wp.omegastation.ca/wp-content/uploads/abstract-painting-with-red-and-blue-colors-3435249.jpg 1440w',
              },
              {
                mediaItemUrl: 'http://dev.resume-wp.omegastation.ca/wp-content/uploads/black-and-white-carbon-close-up-close-up-2092075.jpg',
                sizes: '(max-width: 1024px) 100vw, 1024px',
                srcSet:
                  'http://dev.resume-wp.omegastation.ca/wp-content/uploads/black-and-white-carbon-close-up-close-up-2092075-1024x171.jpg 1024w, http://dev.resume-wp.omegastation.ca/wp-content/uploads/black-and-white-carbon-close-up-close-up-2092075-300x50.jpg 300w, http://dev.resume-wp.omegastation.ca/wp-content/uploads/black-and-white-carbon-close-up-close-up-2092075-768x128.jpg 768w, http://dev.resume-wp.omegastation.ca/wp-content/uploads/black-and-white-carbon-close-up-close-up-2092075.jpg 1440w',
              },
            ],
          },
          aside: {
            resumeHeading: 'Download PDF',
            resumeImage: {
              mediaItemUrl: 'http://dev.resume-wp.omegastation.ca/wp-content/uploads/resume.jpg',
              sizes: null,
              srcSet: null,
            },
            resumeUrl: {
              mediaItemUrl: 'http://dev.resume-wp.omegastation.ca/wp-content/uploads/resume_paul-kevin-koehler.pdf',
            },
            tagcloudHeading: "Things I'm Good At",
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
