import React from 'react';
import { section } from '../../../utility/constant';
import GitHubCorner from '../../core/GitHubCorner';
import Section from '../../core/Section';
import Footer from './components/Footer';
import Header from './components/Header';
import StyledPage from './style';

const PageType4 = (): JSX.Element => (
  <StyledPage>
    <GitHubCorner />
    <Header />
    <main>
      {section.map((type: string, i: number) => (
        <Section key={i} type={type} hasEnhancedHeading={true} hasListItemCheck={true} />
      ))}
    </main>
    <Footer />
  </StyledPage>
);

export default PageType4;
