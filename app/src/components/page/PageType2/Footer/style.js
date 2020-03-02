import styled from '@emotion/styled';
import { border } from '../../../../utility/mixin';

const StyledFooter = styled.footer`
  display: none;
  margin: 120px 0 50px;
  text-align: center;

  > div {
    &:nth-of-type(1) {
      ${border('4px', true)};
      width: 600px;
      margin: 0 auto 40px;

      div {
        ${border()};

        &:first-of-type {
          display: flex;

          div {
            display: flex;
            flex-direction: column;
            justify-content: center;
            flex-basis: 30%;

            &:not(:first-of-type) {
              margin: 0 0 0 2px;
            }

            &:nth-of-type(2) {
              flex-basis: 40%;
              padding: 10px;

              p {
                margin: 0 0 5px;
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
      justify-content: center;
      align-items: center;
      height: 85px;
      margin: 0 0 20px;
      overflow: hidden;

      img {
        position: relative;

        &:first-of-type,
        &:last-of-type {
          top: 8px;
          height: 70px;
        }

        &:nth-of-type(2) {
          top: 25px;
          margin: 0 30px;
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
