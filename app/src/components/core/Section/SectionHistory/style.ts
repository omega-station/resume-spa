import styled from '@emotion/styled';
import { breakpoint } from '../../../../utility/constant';

const StyledSection = styled.div`
  .history {
    margin: 0 0 30px;

    > div {
      &:first-of-type {
        display: flex;
        flex-direction: column;

        @media (min-width: ${breakpoint.desktop[3]}) {
          flex-direction: row;
        }

        span {
          white-space: nowrap;
        }

        > span {
          font-weight: 600;

          &:first-of-type {
            display: flex;
            flex-basis: 66.66%;
            flex-direction: column;

            @media (max-width: ${breakpoint.mobile[2]}) {
              span:first-of-type {
                white-space: normal;
              }
            }

            @media (min-width: ${breakpoint.tablet.portrait[0]}) {
              flex-direction: row;

              span:not(:first-of-type) {
                margin: 0 0 0 5px;
              }
            }
          }

          &:last-of-type {
            flex-basis: 33.33%;

            @media (min-width: ${breakpoint.desktop[3]}) {
              text-align: right;
            }
          }
        }
      }
    }

    > ul {
      & + ul {
        padding-left: 5px;

        li {
          display: flex;
          list-style: none;

          span {
            &:first-of-type {
              min-width: 120px;
              max-width: 120px;
            }
          }
        }
      }
    }
  }
`;

export default StyledSection;
