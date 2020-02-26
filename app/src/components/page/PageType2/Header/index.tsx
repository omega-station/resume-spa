import React from 'react';
import { lemming } from '../../../../images';
import Masthead from '../../../core/Masthead';
import MenuPage from '../../../core/MenuPage';
import MenuSection from '../../../core/MenuSection';
import StyledHeader from './style';

const Header = (): JSX.Element => {
  const menuItem: JSX.Element = (
    <>
      {Array(5)
        .fill(0)
        .map((value: number, i: number) => (
          <img key={i} src={lemming} alt={`Lemming ${i + 1}`} />
        ))}
    </>
  );

  return (
    <StyledHeader>
      <MenuPage />
      <div>
        <Masthead />
        <MenuSection items={[menuItem]} />
      </div>
    </StyledHeader>
  );
};

export default Header;
