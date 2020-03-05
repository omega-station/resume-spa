import React from 'react';
import MenuPage from '../../core/MenuPage';
import { PropsPageType as Props } from '../Page/definition';
import StyledPage from './style';

const PageType4 = (props: Props): JSX.Element => {
  const { data }: Props = props;
  return (
    <StyledPage>
      <header>
        <MenuPage data={data} />
      </header>
    </StyledPage>
  );
};

export default PageType4;
