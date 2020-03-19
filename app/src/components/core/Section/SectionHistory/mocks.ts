import { GQL_QUERY } from './graphql';

const mocks = [
  {
    request: {
      query: GQL_QUERY,
    },
    result: {
      data: {
        options: {
          resume: {
            educationHeading: 'Education',
            education: [
              {
                campus: 'Sir George Williams Campus',
                dates: 'Jan 2005 to Dec 2006',
                location: 'Montreal, QC',
                school: 'Concordia University',
                points: [
                  {
                    item: 'Visual Communication and Design',
                  },
                ],
              },
              {
                campus: 'Oxford Campus',
                dates: 'Sep 1997 to Dec 1998',
                location: 'London, ON',
                school: 'Fanshawe College of Applied Arts & Technology',
                points: [
                  {
                    item: 'Computer Programming',
                  },
                  {
                    item: 'Graduated with Dean’s Honour',
                  },
                ],
              },
              {
                campus: 'North Campus',
                dates: 'Sep 1989 to Apr 1992',
                location: 'Toronto, ON',
                school: 'Humber College of Applied Arts & Technology',
                points: [
                  {
                    item: 'Film & Television Production',
                  },
                ],
              },
            ],
            workHeading: 'Work History',
            work: [
              {
                company: 'Omega Station',
                dates: 'Jan 2008 to Present',
                intro: 'Design, implement, and optimize:',
                location: 'Vancouver, BC',
                title: 'Principal/Web Developer',
                points: [
                  {
                    item: 'Small- to medium-sized websites',
                  },
                  {
                    item: 'Administration systems',
                  },
                  {
                    item: 'Static and dynamic content',
                  },
                ],
                skillset: null,
              },
              {
                company: 'Origami Software Corp.',
                dates: 'May 2019 to Aug 2019',
                intro: 'Implemented core React components for custom SharePoint solution',
                location: 'Vancouver, BC',
                title: 'Front-end Developer (React)',
                points: [
                  {
                    item: 'Contract position',
                  },
                  {
                    item: 'Ongoing maintenance',
                  },
                ],
                skillset: [
                  {
                    area: 'Languages',
                    skills: 'React DOM, JavaScript ES6+/TypeScript, CSS (in JS), HTML5',
                  },
                  {
                    area: 'Libraries',
                    skills: 'Styled Components, Lodash, Moment',
                  },
                  {
                    area: 'Applications',
                    skills: 'Storybook, Azure DevOps, Yarn, Git',
                  },
                ],
              },
              {
                company: 'Powershifter Media Inc.',
                dates: 'Apr 2015 to Jul 2017',
                intro: 'Implementing, optimizing, and maintaining:',
                location: 'Vancouver, BC',
                title: 'Front-end Developer',
                points: [
                  {
                    item: 'Various medium- to large-sized websites',
                  },
                  {
                    item: 'Static and dynamic content',
                  },
                ],
                skillset: [
                  {
                    area: 'Languages',
                    skills: 'PHP, HTML5, CSS/Sass, JavaScript/jQuery, AJAX',
                  },
                  {
                    area: 'Databases',
                    skills: 'MySQL',
                  },
                  {
                    area: 'Applications',
                    skills: 'Sketch, Photoshop',
                  },
                ],
              },
              {
                company: 'Hot Tomali Communications Inc.',
                dates: 'Jul 2008 to Mar 2010',
                intro: 'Designed, implemented, and optimized:',
                location: 'Vancouver, BC',
                title: 'Web Developer',
                points: [
                  {
                    item: 'Dynamic Content Management System (HotCMS) and support modules',
                  },
                  {
                    item: 'Various small- to medium-sized websites',
                  },
                  {
                    item: 'Static and dynamic content',
                  },
                ],
                skillset: [
                  {
                    area: 'Languages',
                    skills: 'PHP/CodeIgniter/Smarty, HTML, CSS, JavaScript/jQuery, SQL, AJAX',
                  },
                  {
                    area: 'Databases',
                    skills: 'MySQL',
                  },
                  {
                    area: 'Applications',
                    skills: 'Photoshop, Flash',
                  },
                ],
              },
            ],
          },
        },
      },
    },
  },
];

export default mocks;
