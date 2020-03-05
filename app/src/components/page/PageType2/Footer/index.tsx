import React from 'react';
import { coding, reading, ucDigger, ucMain } from '../../../../images';
import StyledFooter from './style';

const Footer = (): JSX.Element => {
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
          <div>
            <img src={coding} alt="" />
          </div>
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
          <div>
            <img src={reading} alt="" />
          </div>
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
        <img src={ucDigger} alt="" />
        <img src={ucMain} alt="" />
        <img src={ucDigger} alt="" />
      </div>
      {counter}
    </StyledFooter>
  );
};

export default Footer;
