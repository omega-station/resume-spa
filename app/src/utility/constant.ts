export const viewport = {
  mobile: { ...['375px', '420px', '480px', '640px', '720px'] },
  tablet: {
    portrait: { ...['768px', '800px', '880px', '920px'] },
    landscape: { ...['1024px', '1080px'] },
  },
  desktop: { ...['1200px', '1280px', '1440px', '1600px', '1800px'] },
};

export const color = {
  black: 'rgb(0, 0, 0)',
  blue: 'rgb(0, 0, 255)',
  green: {
    dark: 'rgb(0, 64, 0)',
    dark2: 'rgb(0, 20, 0)',
    light: 'rgb(0, 200, 0)',
    medium: 'rgb(0, 128, 0)',
  },
  grey: {
    dark: 'rgb(60, 60, 60)',
    dark2: 'rgb(100, 100, 100)',
    light: 'rgb(240, 240, 240)',
    light2: 'rgb(200, 200, 200)',
    medium: 'rgb(128, 128, 128)',
    medium2: 'rgb(140, 140, 140)',
  },
  orange: {
    dark: 'rgb(255, 140, 0)',
    medium: 'rgb(255, 165, 0)',
  },
  red: {
    medium: 'rgb(173, 42, 36)',
    medium2: 'rgb(130, 21, 18)',
    dark: 'rgb(97, 0, 0)',
  },
  white: 'rgb(255, 255, 255)',
};

export const padding = {
  mobile: '4.5%',
  desktop: '50px',
};

export const section = ['about', 'skillset', 'work', 'education', 'interests', 'references', 'meta'];

export const transition = { duration: 300 };
