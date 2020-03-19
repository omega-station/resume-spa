import styled from '@emotion/styled';
import { breakpoint, color } from '../../../../../utility/constant';
import { padding } from '../../../../../utility/mixin';

const StyledFooter = styled.footer`
  ${padding(true, '10px', '15px')};
  display: flex;
  align-items: center;
  border-top: 3px solid ${color.pagetype[1].green.medium};

  @media (min-width: ${breakpoint.desktop[3]}) {
    ${padding(true, '10px', '10px')};
  }

  &,
  div {
    width: 100%;
  }

  div {
    justify-content: flex-start;

    ul {
      flex-direction: column;

      li {
        font-size: 1.3rem;
        line-height: 1.3em;
      }

      &:first-of-type {
        margin: 0 0 15px;

        li {
          font-weight: bold;
        }
      }

      @media (min-width: ${breakpoint.desktop[1]}) {
        flex-direction: row;

        &:first-of-type {
          li {
            &:not(:first-of-type) {
              margin: 0 0 0 10px;
            }

            &:nth-of-type(2) {
              display: inline;
            }
          }
        }

        &:last-of-type {
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: flex-end;
          max-width: 640px;

          li:not(:first-of-type) {
            margin: 0 0 0 25px;
          }
        }
      }

      @media (min-width: ${breakpoint.desktop[3]}) {
        &:last-of-type {
          max-width: none;
        }
      }
    }

    @media (min-width: ${breakpoint.mobile[3]}) {
      flex-direction: row;
      justify-content: space-between;

      ul {
        &:first-of-type {
          margin: 0;
        }

        &:last-of-type {
          align-items: flex-end;
        }
      }
    }
  }
`;

export default StyledFooter;
