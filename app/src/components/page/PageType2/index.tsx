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

  const section = ['about', 'skillset', 'work', 'education', 'interests', 'references', 'meta'];

  return (
    <StyledPage>
      <GithubCorner />
      <Header />
      <main>
        {section.map((type: string, i: number) => (
          <Section key={i} type={type} />
        ))}
      </main>
      <Footer />
    </StyledPage>
  );
};

export default PageType2;
