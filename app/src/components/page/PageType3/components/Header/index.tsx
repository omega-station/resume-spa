import React from 'react';
import { QueryResult, useQuery } from 'react-apollo';
import Error from '../../../../core/Error';
import Loading from '../../../../core/Loading';
import MenuPage from '../../../../core/MenuPage';
import defaults from './defaults';
import { Props } from './definition';
import StyledHeader from './style';
import { GQL_QUERY } from './graphql';

const Header = (props: Props): JSX.Element => {
  const { section, onClick } = { ...defaults, ...props };
  const { data, loading, error }: QueryResult = useQuery(GQL_QUERY);

  if (loading) return <Loading />;
  if (error) return <Error />;

  const settings: any = data.generalSettings;
  const images: any = data.options.images.header;
  const sections: any = data.options.resume.metaSections;
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
