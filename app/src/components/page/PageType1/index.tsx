import React from 'react';
import Contact from '../../core/Contact';
import Masthead from '../../core/Masthead';
import MenuPage from '../../core/MenuPage';
import { PropsPageType as Props } from '../Page/definition';
import StyledPage from './style';

const PageType1 = (props: Props): JSX.Element => {
  const { data }: Props = props;
  return (
    <StyledPage>
      <header>
        <div>
          <Masthead isAscii={true} />
          <Contact data={data} hasTitle={false} />
        </div>
        <MenuPage data={data} />
      </header>
      <main></main>
      <footer>
        <Contact data={data} />
      </footer>
    </StyledPage>
  );
};

export default PageType1;
