import React from 'react';
import defaults from './defaults';
import { Props } from './definition';
import StyledWindow from './style';
import { getRandom } from '../../../../../utility';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';

const Window = (props: Props): JSX.Element => {
  const { children, heading }: Props = { ...defaults, ...props };

  const top: number = getRandom(40, window.innerHeight / 2);
  const left: number = getRandom(40, window.innerWidth / 2);
  const width: number = getRandom(window.innerWidth * 0.4, window.innerWidth * 0.5);
  const height: number = getRandom(350, 450);

  return (
    <StyledWindow className="window-section" top={top} left={left} width={width} height={height}>
      <header>{heading}</header>
      <main>
        <PerfectScrollbar options={{ minScrollbarLength: 50, maxScrollbarLength: 50 }}>{children}</PerfectScrollbar>
      </main>
    </StyledWindow>
  );
};

export default Window;
