import React from 'react';
import Masthead from '../../../core/Masthead';
import MenuPage from '../../../core/MenuPage';
import StyledHeader from './style';
import { Props } from './definition';

const Header = (props: Props): JSX.Element => {
  const { data }: Props = props;
  const items: JSX.Element[] = [<span>Press &lt;←/→&gt;</span>, <span>Press &lt;ENTER&gt; to Select / &lt;ESC&gt; to Close</span>];
  return (
    <StyledHeader>
      <Masthead isAscii={true} />
      <MenuPage data={data} items={items} />
    </StyledHeader>
  );
};

export default Header;
