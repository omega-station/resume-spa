import React from 'react';
import Masthead from '../../../core/Masthead';
import MenuPage from '../../../core/MenuPage';
import StyledHeader from './style';
import { Props } from './definition';

const Header = (props: Props): JSX.Element => {
  const { data }: Props = props;
  const menuItem: JSX.Element = <span>&lt;Press ←/→&gt;</span>;
  return (
    <StyledHeader>
      <Masthead isAscii={true} />
      <MenuPage data={data} items={[menuItem]} />
    </StyledHeader>
  );
};

export default Header;
