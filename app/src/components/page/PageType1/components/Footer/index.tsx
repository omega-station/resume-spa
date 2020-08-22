import React from 'react';
import Contact from '../../../../core/Contact';
import StyledFooter from './style';

const Footer = (): JSX.Element => {
  return (
    <StyledFooter>
      <Contact pageType={1} hasDescription={true} isPostalWithCity={true} />
    </StyledFooter>
  );
};

export default Footer;
