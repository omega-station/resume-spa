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
            aboutHeading: 'A Little About Me',
            aboutIntro:
              "<p>I'm a Front-end Web Developer having both employee and freelance experience; utilizing various operating systems, platforms, frameworks, and programming languages, I offer:</p>\n",
            aboutPoints: [
              {
                item: 'Proven ability and flexibility in adapting to new technologies',
              },
              {
                item: 'Proven dedication in meeting project deliverables on-time and on-budget',
              },
              {
                item: 'Excellent problem solving, organizational, and team communication skills',
              },
              {
                item: 'A respectful, easy-going attitude, a keen curiosity, and a great sense of humour',
              },
            ],
            interestsHeading: 'Interests',
            interestsIntro: '<p>When I’m not working, I just might be...</p>\n',
            interestsPoints: [
              {
                item: 'Learning about Blockchain technology and Web 3.0',
              },
              {
                item: 'Thinking about exercising and perhaps doing some',
              },
              {
                item: 'Reading about things that pique my interest',
              },
              {
                item: 'Tooling around with retro-computing and gaming',
              },
              {
                item: 'Playing music, solo or with friends',
              },
              {
                item: 'Attending Meetups of various type and quality :)',
              },
            ],
            metaCopy:
              '<p>This website is built with <a href="https://reactjs.org/" target="_blank" rel="noopener">React</a> (leveraging <a href="https://www.typescriptlang.org/" target="_blank" rel="noopener">TypeScript</a>) using CSS in JS via <a href="https://emotion.sh/" target="_blank" rel="noopener">Emotion</a>, Test Driven Development via <a href="https://jestjs.io/" target="_blank" rel="noopener">Jest</a> &amp; <a href="https://testing-library.com/docs/react-testing-library/intro" target="_blank" rel="noopener">React Testing Library</a>, and even a little <a href="https://storybook.js.org/" target="_blank" rel="noopener">Storybook</a>—which may be <a href="http://resume-sb.omegastation.ca/" target="_blank" rel="noopener">viewed here</a>. It consumes content provided by a <a href="https://wordpress.org/" target="_blank" rel="noopener">WordPress</a> backend (using mostly <a href="https://www.advancedcustomfields.com/" target="_blank" rel="noopener">ACFs</a>) and a <a href="https://graphql.org/" target="_blank" rel="noopener">GraphQL</a> API.</p>\n<p>If you&#8217;re interested, the codebase may be found on <a href="https://github.com/omega-station/resume-spa" target="_blank" rel="noopener">GitHub</a>.</p>\n<p>No tables were used in the production of this website, nor were any animals harmed. I don&#8217;t care what that monkey says, I never laid a hand on him.</p>\n',
            metaHeading: 'About This Website',
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
            referencesHeading: 'References / PDF',
            referencesIntro:
              '<p>If you&#8217;re interested, my references are available upon request.</p>\n<p>If you&#8217;d like a PDF version of this resume, you can <a href="http://dev.resume-wp.omegastation.ca/wp-content/uploads/resume_paul-kevin-koehler.pdf" target="_blank" rel="noopener">download it here</a>.</p>\n',
          },
        },
      },
    },
  },
];

export default mocks;
