import styled from '@emotion/styled';
import { viewport } from '../../../../../utility/constant';
import { border } from '../../../../../utility/mixin';

const StyledFooter = styled.footer`
  margin: 120px 0 50px;
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

            &:not(:first-of-type) {
              margin: 2px 0 0;
            }

            &:nth-of-type(2) {
              padding: 10px;

              p {
                margin: 0 0 5px;
              }
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
                margin: 0 0 0 2px;
              }

              img {
                display: block;
                max-width: 300px;
                max-height: 200px;
                width: auto;
                height: auto;
                object-fit: cover;
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

      @media (min-width: ${viewport.mobile[3]}) {
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
