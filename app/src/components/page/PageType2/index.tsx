import React, { useEffect } from 'react';
import { section } from '../../../utility/constant';
import GitHubCorner from '../../core/GitHubCorner';
import Section from '../../core/Section';
import Cursor from './components/Cursor';
import Footer from './components/Footer';
import Header from './components/Header';
import StyledPage from './style';

const PageType2 = (): JSX.Element => {
  const cursor: Cursor = new Cursor();

  useEffect(() => {
    cursor.create();
    return () => cursor.destroy();
  }, [cursor]);

  return (
    <StyledPage>
      <GitHubCorner isLeft={true} />
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
