import React from 'react';
import { section } from '../../../utility/constant';
import GitHub from '../../core/GitHub';
import Section from '../../core/Section';
import Footer from './components/Footer';
import Header from './components/Header';
import StyledPage from './style';

const PageType4 = (): JSX.Element => (
  <StyledPage>
    <GitHub />
    <Header />
    <main>
      {section.map((section: string, i: number) => (
        <Section key={i} pagetype={4} section={section} hasEnhancedHeading={true} hasListItemCheck={true} hasResumeImage={true} useSkillsetChart={true} />
      ))}
    </main>
    <Footer />
  </StyledPage>
);

export default PageType4;
