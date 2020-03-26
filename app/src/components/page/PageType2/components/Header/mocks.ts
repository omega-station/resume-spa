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
            pagetype2Images: [
              {
                mediaItemUrl: 'http://dev.resume-wp.omegastation.ca/wp-content/uploads/lemming.gif',
                sizes: null,
                srcSet: null,
                title: 'Lemming',
              },
              {
                mediaItemUrl: 'http://dev.resume-wp.omegastation.ca/wp-content/uploads/uc-main.gif',
                sizes: null,
                srcSet: null,
                title: 'Under Construction',
              },
              {
                mediaItemUrl: 'http://dev.resume-wp.omegastation.ca/wp-content/uploads/uc-digger.gif',
                sizes: null,
                srcSet: null,
                title: 'Digger',
              },
            ],
          },
        },
      },
    },
  },
];

export default mocks;
