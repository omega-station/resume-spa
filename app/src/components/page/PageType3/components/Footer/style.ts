import styled from '@emotion/styled';
import { boxShadow, padding } from 'utility/mixin';
import { color, viewport } from 'utility/constant';

const StyledFooter = styled.footer`
  ${padding()};
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 100;

  > div {
    ${boxShadow(0, -2, 3)};
    width: 100%;
    max-width: 960px;
    min-height: 35px;
    margin: 0 auto;
    padding: 8px 20px;
    background-color: ${color.grey.dark};
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;

    ul {
      flex-direction: column;
      align-items: flex-start;

      li {
        color: ${color.white};
        font-size: 0.8rem;
        font-weight: 600;
        line-height: 1.5em;

        @media (min-width: ${viewport.tablet.landscape[0]}) {
          font-size: 0.9rem;
        }
      }

      &:first-of-type {
        margin: 0 0 10px;

        @media (min-width: ${viewport.mobile[2]}) {
          margin: 0;
        }
      }

      &:last-of-type {
        align-items: flex-end;

        @media (min-width: ${viewport.mobile[2]}) {
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: flex-end;
          width: 280px;

          li:not(:first-of-type) {
            margin: 0 0 0 12px;
          }
        }

        @media (min-width: ${viewport.tablet.portrait[0]}) {
          flex-wrap: nowrap;
          width: 80%;

          li:not(:first-of-type) {
            margin: 0 0 0 18px;
          }
        }
      }
    }
  }
`;

export default StyledFooter;
