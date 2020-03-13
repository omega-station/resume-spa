export const global = {
  padding: {
    mobile: '4.5%',
    desktop: '50px',
  },
};

export const breakpoint = {
  mobile: { ...['375px', '420px', '480px', '640px', '720px'] },
  tablet: {
    portrait: { ...['768px', '800px', '880px'] },
    landscape: { ...['1024px'] },
  },
  desktop: { ...['1200px', '1280px', '1440px', '1600px', '1800px'] },
};

export const color = {
  alpha: {
    black: 'rgba(0, 0, 0, .35)',
  },
  solid: {
    black: 'rgb(0, 0, 0)',
    blue: 'rgb(0, 0, 255)',
    grey: {
      light: 'rgb(240, 240, 240)',
      light2: 'rgb(200, 200, 200)',
      medium: 'rgb(128, 128, 128)',
      medium2: 'rgb(140, 140, 140)',
      dark: 'rgb(60, 60, 60)',
    },
    orange: {
      dark: 'rgb(255, 140, 0)',
      medium: 'rgb(255, 165, 0)',
    },
    white: 'rgb(255, 255, 255)',
  },
  pagetype: {
    1: {
      alpha: {
        green: 'rgba(0, 200, 0, 0.7)',
        green2: 'rgba(0, 200, 0, 0.5)',
      },
      solid: {
        green: 'rgb(0, 128, 0)',
        green2: 'rgb(0, 20, 0)',
        green3: 'rgb(0, 200, 0)',
        green4: 'rgb(0, 64, 0)',
      },
    },
    2: {},
    3: {},
    4: {},
  },
};

export const section = ['about', 'skillset', 'work', 'education', 'interests', 'references', 'meta'];

export const transition = { duration: '0.3s' };
