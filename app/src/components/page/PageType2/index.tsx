import React, { useEffect } from 'react';
import GithubCorner from '../../core/GithubCorner';
import Section from '../../core/Section';
import Cursor from './Cursor';
import Footer from './Footer';
import Header from './Header';
import StyledPage from './style';

const PageType2 = (): JSX.Element => {
  const cursor: Cursor = new Cursor();

  useEffect(() => {
    cursor.create();
    return () => cursor.destroy();
  }, [cursor]);

  return (
    <StyledPage>
      <GithubCorner />
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
};

export default PageType2;
