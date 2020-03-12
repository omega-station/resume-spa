import React from 'react';
import MenuPage from '../../core/MenuPage';
import { PropsPageType as Props } from '../Page/definition';
import StyledPage from './style';

const PageType4 = (props: Props): JSX.Element => {
  return (
    <StyledPage>
      <header>
        <MenuPage />
      </header>
    </StyledPage>
  );
};

export default PageType4;
