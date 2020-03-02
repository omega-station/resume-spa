import styled from '@emotion/styled';
import { breakpoint } from '../../../../utility/constant';
import { border } from '../../../../utility/mixin';

const StyledFooter = styled.footer`
  margin: 120px 0 50px;
  text-align: center;

  > div {
    &:nth-of-type(1) {
      ${border('4px', true)};
      width: 100%;
      max-width: 300px;
      margin: 0 auto 40px;

      @media (min-width: ${breakpoint.mobile[3]}) {
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
            flex-basis: 30%;

            &:not(:first-of-type) {
              margin: 2px 0 0;
            }

            &:nth-of-type(2) {
              flex-basis: 40%;
              padding: 10px;

              p {
                margin: 0 0 5px;
              }
            }
          }

          @media (min-width: ${breakpoint.mobile[3]}) {
            flex-direction: row;

            div:not(:first-of-type) {
              margin: 0 0 0 2px;
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

      img {
        position: relative;

        &:first-of-type,
        &:last-of-type {
          height: 70px;
        }

        &:first-of-type {
          top: 20px;
        }

        &:last-of-type {
          top: -50px;
        }
      }

      @media (min-width: ${breakpoint.mobile[3]}) {
        flex-direction: row;
        height: 85px;
        margin: 0 0 40px;
        overflow: hidden;

        img {
          &:first-of-type,
          &:last-of-type {
            top: 8px;
          }

          &:nth-of-type(2) {
            top: 25px;
            margin: 0 40px;
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
