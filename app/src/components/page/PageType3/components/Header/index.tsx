import Error from 'components/core/Error';
import Loading from 'components/core/Loading';
import MenuPage from 'components/core/MenuPage';
import React from 'react';
import { QueryResult, useQuery } from 'react-apollo';
import Helmet from 'react-helmet';
import { getImage } from 'utility';
import FontAwesomeIcon from 'utility/font-awesome';
import defaults from './defaults';
import { Props } from './definition';
import { GQL_QUERY } from './graphql';
import StyledHeader from './style';

const Header = (props: Props): JSX.Element => {
  const { section, isMenuOpen, onClickMenuItem, onClickMenuToggle } = { ...defaults, ...props };
  const { data, loading, error }: QueryResult = useQuery(GQL_QUERY);

  if (loading) return <Loading />;
  if (error) return <Error />;

  const settings: any = data.generalSettings;
  const image: any = data.options.pageContent.pagetype3Images[section];
  const sections: any = data.options.resume.metaSections;

  return (
    <>
      <Helmet>
        {data?.options.pageContent.pagetype3Images.map((image: { [key: string]: string }) => {
          // @ts-ignore
          return <link rel="preload" as="image" imagesrcset={image.srcSet} imagesizes={image.sizes}></link>;
        })}
      </Helmet>
      <StyledHeader isMenuOpen={isMenuOpen}>
        <MenuPage />
        <div>
          <div>
            <div className="overlay"></div>
            <div className="copy">
              <h1>{settings.title}</h1>
              <h2>{settings.description}</h2>
            </div>
            {getImage(image, `${settings.title} • ${settings.description}`)}
          </div>
        </div>
        <nav>
          <ul>
            {sections.map((item: { [key: string]: string }, i: number) => (
              <li key={item.name} data-section={item.name} className={i === section ? 'is-current' : ''} onClick={() => onClickMenuItem(i)}>
                {item.heading}
              </li>
            ))}
            <li className="item-toggle" onClick={() => onClickMenuToggle()}>
              <FontAwesomeIcon icon={['fas', 'ellipsis-v']} />
            </li>
          </ul>
        </nav>
      </StyledHeader>
    </>
  );
};

export default Header;
