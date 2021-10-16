import styled from '@emotion/styled';
import { viewport } from 'utility/constant';
import { border } from 'utility/mixin';

const StyledFooter = styled.footer`
  padding: 80px 0 40px;
  text-align: center;

  > div {
    &:nth-of-type(1) {
      ${border(4, true)};
      width: 100%;
      max-width: 300px;
      margin: 0 auto 40px;

      @media (min-width: ${viewport.mobile[3]}) {
        max-width: 680px;
      }

      div {
        ${border()};

        &:first-of-type {
          display: flex;
          flex-direction: column;

          div {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            &:not(:first-of-type) {
              margin: 2px 0 0;
            }

            &:nth-of-type(2) {
              padding: 10px;

              p {
                margin: 0 0 5px;
              }
            }

            img {
              display: block;
            }
          }

          @media (min-width: ${viewport.mobile[3]}) {
            flex-direction: row;

            div {
              width: 30%;

              &:nth-of-type(2) {
                width: 40%;
              }

              &:not(:first-of-type) {
                margin: 0 0 0 3px;
              }
            }
          }
        }

        &:last-of-type {
          margin: 2px 0 0;
          padding: 5px;
        }
      }
    }

    &:nth-of-type(2) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 0 0 40px;

      img {
        &:nth-of-type(2) {
          margin: 4.5% 0;
        }
      }

      @media (min-width: ${viewport.mobile[3]}) {
        flex-direction: row;

        img {
          width: 15%;

          &:nth-of-type(2) {
            width: 61%;
            max-width: 360px;
            margin: 0 4.5%;
          }
        }
      }
    }

    &:nth-of-type(3) img {
      height: 36px;
      object-fit: cover;
    }
  }
`;

export default StyledFooter;
