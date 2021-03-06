import React, { useEffect } from 'react';
import { section } from '../../../utility/constant';
import GitHub from '../../core/GitHub';
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
      <GitHub />
      <Header />
      <main>
        {section.map((section: string, i: number) => (
          <Section key={i} pagetype={2} section={section} />
        ))}
      </main>
      <Footer />
    </StyledPage>
  );
};

export default PageType2;
