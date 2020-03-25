import React from 'react';
import { ParallaxBanner } from 'react-scroll-parallax';
import image from '../../../../../images/2020/circuit-board-footer.jpg';
import Contact from '../../../../core/Contact';
import StyledFooter from './style';

const Footer = (): JSX.Element => (
  <StyledFooter>
    <ParallaxBanner
      layers={[
        {
          image: image,
          amount: 0.4,
          children: null,
        },
      ]}
      style={{
        height: '300px',
      }}
    >
      <div className="content">
        <Contact hasDescription={true} />
      </div>
    </ParallaxBanner>
  </StyledFooter>
);

export default Footer;
