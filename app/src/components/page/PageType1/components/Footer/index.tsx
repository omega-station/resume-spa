import React from 'react';
import Contact from '../../../../core/Contact';
import StyledFooter from './style';
import { Props } from './definition';

const Footer = (props: Props): JSX.Element => {
  const { data }: Props = props;
  return (
    <StyledFooter>
      <Contact data={data} hasContainer={true} />
    </StyledFooter>
  );
};

export default Footer;
