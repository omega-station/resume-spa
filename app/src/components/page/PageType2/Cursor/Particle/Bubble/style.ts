const offset: string = '0';
const color: string = '#e6f1f7';
const size: string = '20px';
const shadow: { a: string; b: string } = {
  a: '#6badd3',
  b: '#3a92c5',
};

const style: string = `
  display: block;
  position: absolute;
  top: ${offset};
  left: ${offset};
  width: ${size};
  height: ${size};
  background: ${color};
  box-shadow: -1px 0 ${shadow.a}, 0 -1px ${shadow.a}, 1px 0 ${shadow.b}, 0 1px ${shadow.b};
  border-radius: 50%;
  pointer-events: none;
  will-change: transform;
  z-index: 9999999;
`;

export default style;
