import React from 'react';
import { lemming } from '../../../../../images';
import Contact from '../../../../core/Contact';
import Masthead from '../../../../core/Masthead';
import MenuPage from '../../../../core/MenuPage';
import MenuSection from '../../../../core/MenuSection';
import StyledHeader from './style';

const Header = (): JSX.Element => {
  const items: JSX.Element = (
    <>
      {Array(21)
        .fill(0)
        .map(
          (value: number, i: number): JSX.Element => (
            <img key={i} src={lemming} alt={`Lemming ${i + 1}`} />
          )
        )}
    </>
  );

  return (
    <StyledHeader>
      <MenuPage />
      <div>
        <Masthead />
        <Contact hasTitle={false} isPostalWithCity={true} />
        <MenuSection items={[items]} />
      </div>
    </StyledHeader>
  );
};

export default Header;
