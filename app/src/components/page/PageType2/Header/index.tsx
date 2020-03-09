import React from 'react';
import { lemming } from '../../../../images';
import Masthead from '../../../core/Masthead';
import MenuPage from '../../../core/MenuPage';
import MenuSection from '../../../core/MenuSection';
import StyledHeader from './style';
import Contact from '../../../core/Contact';
import { Props } from './definition';

const Header = (props: Props): JSX.Element => {
  const { data }: Props = props;
  const menuItem: JSX.Element = (
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
      <MenuPage data={data} />
      <div>
        <Masthead data={data} />
        <Contact data={data} hasTitle={false} />
        <MenuSection data={data} items={[menuItem]} />
      </div>
    </StyledHeader>
  );
};

export default Header;
