import React from 'react';
import { ParallaxBanner } from 'react-scroll-parallax';
import image from '../../../../../images/2020/circuit-board-header.jpg';
import Masthead from '../../../../core/Masthead';
import MenuPage from '../../../../core/MenuPage';
import StyledHeader from './style';

const Header = (): JSX.Element => {
  return (
    <StyledHeader>
      <ParallaxBanner
        layers={[
          {
            image,
            // amount: -0.2,
            amount: -0.7,
            children: null,
          },
        ]}
        style={{
          height: '600px',
        }}
      >
        <div className="content">
          <Masthead />
          <MenuPage items={[<span></span>]} />
        </div>
      </ParallaxBanner>
    </StyledHeader>
  );
};

export default Header;
