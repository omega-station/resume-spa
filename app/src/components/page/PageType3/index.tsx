import React from 'react';
import MenuPage from '../../core/MenuPage';
import { PropsPageType as Props } from '../Page/definition';
import StyledPage from './style';

const PageType3 = (props: Props): JSX.Element => {
  const { data }: Props = props;
  return (
    <StyledPage>
      <main>
        <MenuPage data={data} />
      </main>
    </StyledPage>
  );
};

export default PageType3;
