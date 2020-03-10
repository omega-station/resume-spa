const offset: string = '12px';
const size: string = '12px';

const style: string = `
  display: block;
  position: fixed;
  top: ${offset};
  left: ${offset};
  font-size: ${size};
  pointer-events: none;
  will-change: transform;
  z-index: 9999999;
`;

export default style;
