const offset: string = '5px';
const size: string = '36px';

const style: string = `
  display: block;
  position: absolute;
  top: ${offset};
  left: ${offset};
  font-size: ${size};
  pointer-events: none;
  will-change: transform;
  z-index: 9999999;
`;

export default style;
