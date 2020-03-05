import React, { useEffect } from 'react';
import GithubCorner from '../../core/GithubCorner';
import Section from '../../core/Section';
import { PropsPageType as Props } from '../Page/definition';
import Cursor from './Cursor';
import Footer from './Footer';
import Header from './Header';
import StyledPage from './style';

const PageType2 = (props: Props): JSX.Element => {
  const { data }: Props = props;

  const cursor: Cursor = new Cursor();
  useEffect(() => {
    cursor.create();
    return () => cursor.destroy();
  }, [cursor]);

  const section = ['about', 'skillset', 'work', 'education', 'interests', 'references', 'meta'];

  return (
    <StyledPage>
      <GithubCorner />
      <Header data={data} />
      <main>
        {section.map((type: string, i: number) => (
          <Section key={i} type={type} data={data} />
        ))}
      </main>
      <Footer />
    </StyledPage>
  );
};

export default PageType2;
