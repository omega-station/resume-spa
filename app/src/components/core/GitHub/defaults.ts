import { color } from '../../../utility/constant';
import { Props } from './definition';

const defaults: Props = {
  isLeft: false,
  ariaLabel: 'View source on GitHub',
  color: color.black,
  fill: color.white,
  mode: 'square',
  url: process.env.REACT_APP_URL_GITHUB,
};

export default defaults;
