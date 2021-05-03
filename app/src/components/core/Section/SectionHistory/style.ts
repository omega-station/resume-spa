import styled from '@emotion/styled';
import { viewport } from '../../../../utility/constant';

const StyledSection = styled.div`
  .history {
    margin: 0 0 30px;

    > div {
      &:first-of-type {
        display: flex;
        flex-direction: column;

        @media (min-width: ${viewport.desktop[3]}) {
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

            @media (max-width: ${viewport.mobile[2]}) {
              span:first-of-type {
                white-space: normal;
              }
            }

            @media (min-width: ${viewport.tablet.portrait[0]}) {
              flex-direction: row;

              span:not(:last-of-type) {
                margin: 0 5px 0 0;
              }
            }
          }

          &:last-of-type {
            flex-basis: 33.33%;

            @media (min-width: ${viewport.desktop[3]}) {
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
              min-width: 100px;
              max-width: 100px;

              @media (min-width: ${viewport.tablet.portrait[1]}) {
                min-width: 130px;
                max-width: 130px;
              }
            }
          }
        }
      }
    }
  }
`;

export default StyledSection;
