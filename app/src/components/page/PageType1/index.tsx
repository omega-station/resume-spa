import React from 'react';
import Contact from '../../core/Contact';
import Masthead from '../../core/Masthead';
import MenuPage from '../../core/MenuPage';
import StyledPage from './style';

const PageType1 = (): JSX.Element => {
  return (
    <StyledPage>
      <header>
        <div>
          <div>
            <Masthead isAscii={true} />
          </div>
          <div>
            <Contact hasTitle={false} />
          </div>
        </div>
        <MenuPage />
      </header>
      <main></main>
      <footer>
        <Contact />
      </footer>
    </StyledPage>
  );
};

export default PageType1;
