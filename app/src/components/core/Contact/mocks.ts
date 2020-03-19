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
          resume: {
            contactAddress: '501-1139 Barclay Street',
            contactCity: 'Vancouver, BC',
            contactEmail: 'paul@omegastation.ca',
            contactPhone: '604.790.6176',
            contactPostal: 'V6E 1G8',
          },
        },
      },
    },
  },
];

export default mocks;
