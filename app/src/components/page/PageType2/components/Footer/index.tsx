import React from 'react';
import { QueryResult, useQuery } from 'react-apollo';
import { getImage, getRandomInt } from '../../../../../utility';
import Error from '../../../../core/Error';
import Loading from '../../../../core/Loading';
import { GQL_QUERY } from './graphql';
import StyledFooter from './style';

const Footer = (): JSX.Element => {
  const { data, loading, error }: QueryResult = useQuery(GQL_QUERY);

  if (loading) return <Loading />;
  if (error) return <Error />;

  const images: any = data.options.pageContent.pagetype2Images;

  const url = 'https://en.wikipedia.org/wiki/Webring';
  const counter = (
    <div>
      <a href="https://www.hitwebcounter.com/" target="_blank" rel="noopener noreferrer">
        <img src="https://hitwebcounter.com/counter/counter.php?page=7200063&style=0038&nbdigits=7&type=page&initCount=325145" alt="hitwebcounter" />
      </a>
    </div>
  );

  return (
    <StyledFooter>
      <div>
        <div>
          <div>{getImage(images[getRandomInt(3, images.length - 1)])}</div>
          <div>
            <p>
              This{' '}
              <a href={url} target="_blank" rel="noopener noreferrer">
                Amazing Front-end Developer's Ring
              </a>{' '}
              site is owned by{' '}
              <a href={url} target="_blank" rel="noopener noreferrer">
                Paul Kevin Koehler
              </a>
              .
            </p>
            <p>
              Want to join the{' '}
              <a href={url} target="_blank" rel="noopener noreferrer">
                Amazing Front-end Developer's Ring
              </a>
              ?
            </p>
          </div>
          <div>{getImage(images[getRandomInt(3, images.length - 1)])}</div>
        </div>
        <div>
          [
          <a href={url} target="_blank" rel="noopener noreferrer">
            Prev
          </a>
          ] [
          <a href={url} target="_blank" rel="noopener noreferrer">
            Next
          </a>
          ] [
          <a href={url} target="_blank" rel="noopener noreferrer">
            Random
          </a>
          ] [
          <a href={url} target="_blank" rel="noopener noreferrer">
            List
          </a>
          ]
        </div>
      </div>
      <div>
        {getImage(images[1])}
        {getImage(images[2])}
        {getImage(images[1])}
      </div>
      {counter}
    </StyledFooter>
  );
};

export default Footer;
