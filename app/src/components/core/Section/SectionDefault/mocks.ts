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
          pageContent: {
            pagetype2Images: [
              {
                mediaItemUrl: 'http://dev.resume-wp.omegastation.ca/wp-content/uploads/lemming.gif',
                srcSet: null,
                sizes: null,
              },
              {
                mediaItemUrl: 'http://dev.resume-wp.omegastation.ca/wp-content/uploads/uc-main.gif',
                srcSet: null,
                sizes: null,
              },
              {
                mediaItemUrl: 'http://dev.resume-wp.omegastation.ca/wp-content/uploads/uc-digger.gif',
                srcSet: null,
                sizes: null,
              },
            ],
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
            pagetype3AsideIcon: [
              {
                icon: 'far-file-pdf',
              },
              {
                icon: 'fas-file-pdf',
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
            pagetype4Images: [
              {
                mediaItemUrl: 'http://dev.resume-wp.omegastation.ca/wp-content/uploads/circuit-board-header-scaled.jpg',
                sizes: '(max-width: 1024px) 100vw, 1024px',
                srcSet:
                  'http://dev.resume-wp.omegastation.ca/wp-content/uploads/circuit-board-header-1024x683.jpg 1024w, http://dev.resume-wp.omegastation.ca/wp-content/uploads/circuit-board-header-300x200.jpg 300w, http://dev.resume-wp.omegastation.ca/wp-content/uploads/circuit-board-header-768x512.jpg 768w, http://dev.resume-wp.omegastation.ca/wp-content/uploads/circuit-board-header-1536x1024.jpg 1536w, http://dev.resume-wp.omegastation.ca/wp-content/uploads/circuit-board-header-2048x1365.jpg 2048w',
              },
              {
                mediaItemUrl: 'http://dev.resume-wp.omegastation.ca/wp-content/uploads/circuit-board-footer-scaled.jpg',
                sizes: '(max-width: 1024px) 100vw, 1024px',
                srcSet:
                  'http://dev.resume-wp.omegastation.ca/wp-content/uploads/circuit-board-footer-1024x320.jpg 1024w, http://dev.resume-wp.omegastation.ca/wp-content/uploads/circuit-board-footer-300x94.jpg 300w, http://dev.resume-wp.omegastation.ca/wp-content/uploads/circuit-board-footer-768x240.jpg 768w, http://dev.resume-wp.omegastation.ca/wp-content/uploads/circuit-board-footer-1536x480.jpg 1536w, http://dev.resume-wp.omegastation.ca/wp-content/uploads/circuit-board-footer-2048x640.jpg 2048w',
              },
            ],
          },
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
            metaCopyIntro:
              '<p>This website is built with <a href="https://reactjs.org/" target="_blank" rel="noopener">React</a> (leveraging <a href="https://www.typescriptlang.org/" target="_blank" rel="noopener">TypeScript</a>) using CSS in JS via <a href="https://emotion.sh/" target="_blank" rel="noopener">Emotion</a>, Test Driven Development via <a href="https://jestjs.io/" target="_blank" rel="noopener">Jest</a> &amp; <a href="https://testing-library.com/docs/react-testing-library/intro" target="_blank" rel="noopener">React Testing Library</a>, and even a little <a href="https://storybook.js.org/" target="_blank" rel="noopener">Storybook</a>—which may be <a href="http://resume-sb.omegastation.ca/" target="_blank" rel="noopener">viewed here</a>. It consumes content provided by a <a href="https://wordpress.org/" target="_blank" rel="noopener">WordPress</a> backend (using mostly <a href="https://www.advancedcustomfields.com/" target="_blank" rel="noopener">ACFs</a>) and a <a href="https://graphql.org/" target="_blank" rel="noopener">GraphQL</a> API.</p>',
            metaCopyOutro:
              '<p>If you&#8217;re interested, the codebase may be found on <a href="https://github.com/omega-station/resume-spa" target="_blank" rel="noopener">GitHub</a>.</p>\n<p>No tables were used in the production of this website, nor were any animals harmed. I don&#8217;t care what that monkey says, I never laid a hand on him.</p>',
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
                  title: 'resume',
                },
                pdf: {
                  mediaItemUrl: 'http://dev.resume-wp.omegastation.ca/wp-content/uploads/resume_paul-kevin-koehler.pdf',
                },
              },
            ],
          },
        },
      },
    },
  },
];

export default mocks;
