import React, { Fragment } from 'react';
import { QueryResult, useQuery } from 'react-apollo';
import { getImage, getRandomElement } from '../../../../../utility';
import Contact from '../../../../core/Contact';
import Error from '../../../../core/Error';
import Loading from '../../../../core/Loading';
import Masthead from '../../../../core/Masthead';
import MenuPage from '../../../../core/MenuPage';
import MenuSection from '../../../../core/MenuSection';
import { GQL_QUERY } from './graphql';
import StyledHeader from './style';

const Header = (): JSX.Element => {
  const { data, loading, error }: QueryResult = useQuery(GQL_QUERY);

  if (loading) return <Loading />;
  if (error) return <Error />;

  const image: any = getRandomElement(data.options.pageContent.pagetype2ImagesHeader);
  const items: JSX.Element = (
    <>
      {Array(21)
        .fill(0)
        .map(
          (value: number, i: number): JSX.Element => (
            <Fragment key={i}>{getImage(image, `${image.title} ${i + 1}`)}</Fragment>
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
