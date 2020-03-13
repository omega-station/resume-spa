import React from 'react';
import Contact from '../../../../core/Contact';
import StyledFooter from './style';
import { Props } from './definition';

const Footer = (props: Props): JSX.Element => {
  return (
    <StyledFooter>
      <Contact hasContainer={true} hasDescription={false} />
    </StyledFooter>
  );
};

export default Footer;
