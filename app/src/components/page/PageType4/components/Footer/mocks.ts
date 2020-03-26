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
            pagetype4Images: [
              {
                mediaItemUrl: 'http://dev.resume-wp.omegastation.ca/wp-content/uploads/circuit-board-header-scaled.jpg',
                sizes: '(max-width: 1024px) 100vw, 1024px',
                srcSet:
                  'http://dev.resume-wp.omegastation.ca/wp-content/uploads/circuit-board-header-1024x683.jpg 1024w, http://dev.resume-wp.omegastation.ca/wp-content/uploads/circuit-board-header-300x200.jpg 300w, http://dev.resume-wp.omegastation.ca/wp-content/uploads/circuit-board-header-768x512.jpg 768w, http://dev.resume-wp.omegastation.ca/wp-content/uploads/circuit-board-header-1536x1024.jpg 1536w, http://dev.resume-wp.omegastation.ca/wp-content/uploads/circuit-board-header-2048x1365.jpg 2048w',
                title: 'circuit-board-header',
              },
              {
                mediaItemUrl: 'http://dev.resume-wp.omegastation.ca/wp-content/uploads/circuit-board-footer-scaled.jpg',
                sizes: '(max-width: 1024px) 100vw, 1024px',
                srcSet:
                  'http://dev.resume-wp.omegastation.ca/wp-content/uploads/circuit-board-footer-1024x320.jpg 1024w, http://dev.resume-wp.omegastation.ca/wp-content/uploads/circuit-board-footer-300x94.jpg 300w, http://dev.resume-wp.omegastation.ca/wp-content/uploads/circuit-board-footer-768x240.jpg 768w, http://dev.resume-wp.omegastation.ca/wp-content/uploads/circuit-board-footer-1536x480.jpg 1536w, http://dev.resume-wp.omegastation.ca/wp-content/uploads/circuit-board-footer-2048x640.jpg 2048w',
                title: 'circuit-board-footer',
              },
            ],
          },
        },
      },
    },
  },
];

export default mocks;
