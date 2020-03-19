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
          },
        },
      },
    },
  },
];

export default mocks;
