import GQL_QUERY from './query';

const mocks = {
  global: [
    {
      request: {
        query: GQL_QUERY.PAGES,
      },
      result: {
        data: {
          generalSettings: {
            description: 'Web Developer Extraordinaire',
            title: 'Paul Kevin Koehler',
          },
          options: {
            pages: {
              items: [
                {
                  isVisible: true,
                  name: '1984',
                  type: '1',
                },
                {
                  isVisible: true,
                  name: '1996',
                  type: '2',
                },
                {
                  isVisible: true,
                  name: '2008',
                  type: '3',
                },
                {
                  isVisible: true,
                  name: '2020',
                  type: '4',
                },
              ],
              pageFront: '3',
            },
            resume: {
              contactAddress: '501-1139 Barclay Street',
              contactCity: 'Vancouver, BC',
              contactEmail: 'paul@omegastation.ca',
              contactPhone: '604.790.6176',
              contactPostal: 'V6E 1G8',
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
              metaCopyPage: [
                {
                  copy:
                    "<p>This page (1984) was built using... I'm afraid I still don't understand, sir. That might've been one of the shortest assignments in the history of Starfleet. Computer, lights up! I am your worst nightmare! Mr. Worf, you do remember how to fire phasers? Yes, absolutely, I do indeed concur, wholeheartedly! We know you're dealing in stolen ore. But I wanna talk about the assassination attempt on Lieutenant Worf. What's a knock-out like you doing in a computer-generated gin joint like this?</p>\n",
                },
                {
                  copy:
                    "<p>This page (1996) was built using... and attack the Romulans. The look in your eyes, I recognize it. You used to have it for me. Well, that's certainly good to know. You're going to be an interesting companion, Mr. Data. Then maybe you should consider this: if anything happens to them, Starfleet is going to want a full investigation. Now we know what they mean by 'advanced' tactical training. Mr. Worf, you sound like a man who's asking his friend if he can start dating his sister. I've had twelve years to think about it. </p>\n",
                },
                {
                  copy:
                    "<p>This page (2008) was built using... Then maybe you should consider this: if anything happens to them, Starfleet is going to want a full investigation. For an android with no feelings, he sure managed to evoke them in others. We know you're dealing in stolen ore. But I wanna talk about the assassination attempt on Lieutenant Worf. Flair is what marks the difference between artistry and mere competence. Well, I'll say this for him - he's sure of himself. Maybe if we felt any human loss as keenly as we feel one of those close to us, human history would be far less bloody.</p>\n",
                },
                {
                  copy:
                    "<p>This page (2020) was built using... This is not about revenge. This is about justice. My oath is between Captain Kargan and myself. Your only concern is with how you obey my orders. Or do you prefer the rank of prisoner to that of lieutenant? Yes, absolutely, I do indeed concur, wholeheartedly! Now, how the hell do we defeat an enemy that knows us better than we know ourselves? I am your worst nightmare! Mr. Worf, you sound like a man who's asking his friend if he can start dating his sister.</p>\n",
                },
              ],
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
              referencesResume: [
                {
                  image: {
                    sizes: null,
                    srcSet:
                      'http://dev.resume-wp.omegastation.ca/wp-content/uploads/resume_paul-kevin-koehler.jpg 651w, http://dev.resume-wp.omegastation.ca/wp-content/uploads/resume_paul-kevin-koehler-232x300.jpg 232w',
                    mediaItemUrl: 'http://dev.resume-wp.omegastation.ca/wp-content/uploads/resume_paul-kevin-koehler.jpg',
                  },
                  pdf: {
                    mediaItemUrl: 'http://dev.resume-wp.omegastation.ca/wp-content/uploads/resume_paul-kevin-koehler.pdf',
                  },
                },
              ],
              skillsetHeading: 'What I Do Best',
              skillsetAreas: [
                {
                  area: 'Languages',
                  skills: 'JavaScript ES6+/TypeScript, GraphQL, CSS3/Sass, HTML5, PHP, Perl, Python',
                },
                {
                  area: 'Frameworks / Libraries',
                  skills: 'React DOM/Native, Redux/MobX, Apollo Client/Server, Emotion/Styled Components, Jest/Enzyme, Formik, Lodash/Underscore, Twig, Sage',
                },
                {
                  area: 'Framework Tools',
                  skills: 'Apollo, Storybook',
                },
                {
                  area: 'Build Tools',
                  skills: 'NPM Scripts, Webpack, Parcel',
                },
                {
                  area: 'Platforms',
                  skills: 'WordPress/WooCommerce, SharePoint, Joomla, Drupal',
                },
                {
                  area: 'Databases',
                  skills: 'MySQL, PostgreSQL, Oracle, Microsoft Access',
                },
                {
                  area: 'Applications',
                  skills: 'VS Code, NPM, Yarn, Git, GraphiQL, Postman, Jira, Azure DevOps, Apache/Ngenx, Figma, Sketch, Adobe Photoshop/Illustrator/InDesign',
                },
                {
                  area: 'Environments',
                  skills: 'Docker, Lando, Vagrant/Ansible',
                },
                {
                  area: 'Cloud Services',
                  skills: 'AWS, DigitalOcean, Heroku',
                },
                {
                  area: 'Operating Systems',
                  skills: 'macOS, Windows, Linux',
                },
                {
                  area: 'Methodologies',
                  skills: 'Agile, TDD, CD/CI, OOD',
                },
              ],
              skillsetProficiency: [
                {
                  isTagcloud: true,
                  isVisible: true,
                  proficiency: 95,
                  skill: 'HTML5',
                },
                {
                  isTagcloud: true,
                  isVisible: true,
                  proficiency: 95,
                  skill: 'CSS3',
                },
                {
                  isTagcloud: true,
                  isVisible: true,
                  proficiency: 80,
                  skill: 'JavaScript ES6+',
                },
                {
                  isTagcloud: true,
                  isVisible: true,
                  proficiency: 80,
                  skill: 'React',
                },
                {
                  isTagcloud: true,
                  isVisible: true,
                  proficiency: 95,
                  skill: 'Styled Components',
                },
                {
                  isTagcloud: true,
                  isVisible: true,
                  proficiency: 75,
                  skill: 'GraphQL',
                },
                {
                  isTagcloud: true,
                  isVisible: true,
                  proficiency: 75,
                  skill: 'TypeScript',
                },
                {
                  isTagcloud: true,
                  isVisible: true,
                  proficiency: 95,
                  skill: 'WordPress',
                },
                {
                  isTagcloud: true,
                  isVisible: null,
                  proficiency: 70,
                  skill: 'Redux',
                },
                {
                  isTagcloud: true,
                  isVisible: null,
                  proficiency: 70,
                  skill: 'PHP',
                },
                {
                  isTagcloud: true,
                  isVisible: null,
                  proficiency: 70,
                  skill: 'Perl',
                },
                {
                  isTagcloud: true,
                  isVisible: null,
                  proficiency: 60,
                  skill: 'Jest/Enzyme',
                },
                {
                  isTagcloud: true,
                  isVisible: null,
                  proficiency: 50,
                  skill: 'Formik',
                },
                {
                  isTagcloud: true,
                  isVisible: null,
                  proficiency: 90,
                  skill: 'Storybook',
                },
                {
                  isTagcloud: true,
                  isVisible: null,
                  proficiency: 70,
                  skill: 'Webpack',
                },
                {
                  isTagcloud: true,
                  isVisible: null,
                  proficiency: 75,
                  skill: 'MySQL',
                },
                {
                  isTagcloud: true,
                  isVisible: null,
                  proficiency: 60,
                  skill: 'PostgreSQL',
                },
                {
                  isTagcloud: true,
                  isVisible: null,
                  proficiency: 60,
                  skill: 'Parcel',
                },
                {
                  isTagcloud: true,
                  isVisible: null,
                  proficiency: 60,
                  skill: 'Docker',
                },
                {
                  isTagcloud: true,
                  isVisible: null,
                  proficiency: 80,
                  skill: 'Lando',
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
  ],

  pages: [
    {
      request: {
        query: GQL_QUERY.PAGES,
      },
      result: {
        data: {
          options: {
            pages: {
              items: [
                {
                  isVisible: true,
                  name: '1984',
                  type: '1',
                },
                {
                  isVisible: true,
                  name: '1996',
                  type: '2',
                },
                {
                  isVisible: true,
                  name: '2008',
                  type: '3',
                },
                {
                  isVisible: true,
                  name: '2020',
                  type: '4',
                },
              ],
              pageFront: '3',
            },
          },
        },
      },
    },
  ],

  headings: [
    {
      request: {
        query: GQL_QUERY.HEADINGS,
      },
      result: {
        data: {
          options: {
            resume: {
              aboutHeading: 'A Little About Me',
              educationHeading: 'Education',
              interestsHeading: 'Interests',
              metaHeading: 'About This Website',
              referencesHeading: 'References / PDF',
              skillsetHeading: 'What I Do Best',
              workHeading: 'Work History',
            },
          },
        },
      },
    },
  ],

  settings: [
    {
      request: {
        query: GQL_QUERY.SETTINGS,
      },
      result: {
        data: {
          generalSettings: {
            description: 'Web Developer Extraordinaire',
            title: 'Paul Kevin Koehler',
          },
        },
      },
    },
  ],
};

export default mocks;
