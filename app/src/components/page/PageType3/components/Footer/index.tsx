import React, { useState, useEffect } from 'react';
import Contact from '../../../../core/Contact';
import StyledFooter from './style';

const Footer = (): JSX.Element => {
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    const handleResize = (): void => setWidth(window.screen.width);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [width]);

  return (
    <StyledFooter>
      <Contact isPostalWithCity={!(width > 768)} />
    </StyledFooter>
  );
};

export default Footer;
