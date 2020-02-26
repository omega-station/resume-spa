import React from 'react';
import Section from '../../core/Section';
import Footer from './Footer';
import Header from './Header';
import StyledPage from './style';

const PageType2 = (): JSX.Element => (
  <StyledPage>
    <Header />
    <main>
      <Section type="about" />
      <Section type="skillset" />
      <Section type="work" />
      <Section type="education" />
      <Section type="interests" />
      <Section type="references" />
      <Section type="meta" />
    </main>
    <Footer />
  </StyledPage>
);

export default PageType2;
