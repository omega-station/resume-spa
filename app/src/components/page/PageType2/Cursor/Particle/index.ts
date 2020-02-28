import Emoji from './Emoji';

const getParticle = (type: string = 'emoji'): Emoji => {
  let particle: any;

  switch (type) {
    case 'bats':
      particle = new Emoji();
      break;
    case 'bubble':
      particle = new Emoji();
      break;
    case 'emoji':
      particle = new Emoji();
      break;
    case 'fairydust':
      particle = new Emoji();
      break;
    case 'ghost':
      particle = new Emoji();
      break;
    case 'snowflake':
      particle = new Emoji();
      break;
  }

  return particle;
};

export default getParticle;
