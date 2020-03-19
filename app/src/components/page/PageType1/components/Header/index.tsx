import React from 'react';
import Masthead from '../../../../core/Masthead';
import MenuPage from '../../../../core/MenuPage';
import StyledHeader from './style';

const Header = (): JSX.Element => {
  const items: JSX.Element[] = [<span>Press &lt;←/→&gt;</span>, <span>Press &lt;SPACE&gt; to Select / &lt;ESC&gt; to Close</span>];
  return (
    <StyledHeader>
      <Masthead isAscii={true} />
      <MenuPage items={items} />
    </StyledHeader>
  );
};

export default Header;
