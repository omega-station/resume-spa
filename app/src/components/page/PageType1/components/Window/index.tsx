import React from 'react';
import defaults from './defaults';
import { Props } from './definition';
import StyledWindow from './style';
import { getRandomInt } from '../../../../../utility';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Window = (props: Props): JSX.Element => {
  const { children, heading, isTest, onClickClose }: Props = { ...defaults, ...props };

  const _window = {
    top: isTest ? 0 : getRandomInt(40, window.innerHeight / 2),
    left: isTest ? 0 : getRandomInt(40, window.innerWidth / 2),
    width: isTest ? 400 : getRandomInt(window.innerWidth * 0.4, window.innerWidth * 0.5),
    height: isTest ? 300 : getRandomInt(350, 450),
  };

  return (
    <StyledWindow className="window-section" window={_window}>
      <header>
        <span>{heading}</span>
        <FontAwesomeIcon icon={['fas', 'window-close']} onClick={() => onClickClose && onClickClose()} />
      </header>
      <main>
        <PerfectScrollbar options={{ minScrollbarLength: 50, maxScrollbarLength: 50 }}>{children}</PerfectScrollbar>
      </main>
    </StyledWindow>
  );
};

export default Window;
