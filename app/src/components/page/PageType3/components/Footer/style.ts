import styled from '@emotion/styled';
import { boxShadow, padding } from '../../../../../utility/mixin';
import { color, breakpoint } from '../../../../../utility/constant';

const StyledFooter = styled.footer`
  ${padding(true)};
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 100;

  > div {
    ${boxShadow(0, '-2px', '3px')};
    width: 100%;
    max-width: 960px;
    min-height: 35px;
    margin: 0 auto;
    padding: 8px 20px;
    background-color: ${color.core.grey.dark};
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    @media (min-width: ${breakpoint.mobile[2]}) {
      flex-direction: row;
      /* align-items: center; */
      justify-content: space-between;
    }

    ul {
      flex-direction: column;
      align-items: flex-start;

      li {
        color: ${color.core.white};
        font-size: 0.9rem;
        font-weight: 600;
        line-height: 1.5em;
      }

      &:first-of-type {
        margin: 0 0 10px;

        @media (min-width: ${breakpoint.mobile[3]}) {
          margin: 0;
        }
      }

      &:last-of-type {
        @media (min-width: ${breakpoint.mobile[2]}) {
          align-items: flex-end;
        }

        @media (min-width: ${breakpoint.mobile[3]}) {
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: flex-end;
          width: 400px;

          li:not(:first-of-type) {
            margin: 0 0 0 18px;
          }
        }

        @media (min-width: ${breakpoint.tablet.portrait[2]}) {
          flex-wrap: nowrap;
          width: 80%;
        }
      }
    }
  }
`;

export default StyledFooter;
