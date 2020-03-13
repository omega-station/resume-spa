import React from 'react';
import MenuPage from '../../../../core/MenuPage';
import { Props } from './definition';
import StyledHeader from './style';

const Header = (props: Props): JSX.Element => {
  const { section, images, sections, settings, onClick } = props;
  const image = images[section];
  return (
    <StyledHeader>
      <MenuPage />
      <div>
        <div>
          <div>
            <h1>{settings.title}</h1>
            <h2>{settings.description}</h2>
          </div>
          <img src={image.mediaItemUrl} srcSet={image.srcSet} sizes={image.sizes} alt={`${settings.title} • ${settings.description}`} />
        </div>
      </div>
      <nav>
        <ul>
          {sections.map((item: { [key: string]: string }, i: number) => (
            <li key={item.name} data-section={item.name} className={i === section ? 'is-current' : ''} onClick={() => onClick(i)}>
              {item.heading}
            </li>
          ))}
        </ul>
      </nav>
    </StyledHeader>
  );
};

export default Header;
