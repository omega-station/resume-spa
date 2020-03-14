import styled from '@emotion/styled';
import { breakpoint, color } from '../../../../../utility/constant';
// import { backgroundStriped, padding } from '../../../../utility/mixin';
import { padding } from '../../../../../utility/mixin';

const StyledFooter = styled.footer`
  ${padding(true, '10px', '15px')};
  display: flex;
  align-items: center;
  border-top: 3px solid ${color.pagetype[1].green.medium};

  @media (min-width: ${breakpoint.desktop[3]}) {
    ${padding(true, '4px', '4px')};
  }

  &,
  div {
    width: 100%;
    min-height: 10px;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    @media (min-width: ${breakpoint.mobile[3]}) {
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-start;
    }

    span {
      line-height: 1.3em;
      white-space: nowrap;
    }

    > span {
      &,
      * {
        color: ${color.core.black};
        color: ${color.pagetype[1].green.medium};
        font-size: 1.25rem;
        font-size: 1.6rem;
        font-weight: 500;
      }

      &:first-of-type {
        width: 100%;
        font-weight: 600;
        text-align: right;
        margin: 0 0 10px;

        i {
          margin: 0 8px;
          font-style: normal;
          animation: anim-blink 1.8s infinite;

          @keyframes anim-blink {
            0%,
            100% {
              opacity: 0;
            }
            50% {
              opacity: 1;
            }
          }
        }

        @media (min-width: ${breakpoint.mobile[3]}) {
          width: 25%;
          margin: 0;
          text-align: left;
        }
      }

      &:last-of-type {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-end;
        width: 280px;

        @media (min-width: ${breakpoint.tablet.landscape[0]}) {
          width: 600px;
        }

        @media (min-width: ${breakpoint.desktop[3]}) {
          width: 75%;
        }

        span {
          &:not(:first-of-type) {
            margin-left: 25px;
          }

          a:hover {
            border-bottom: 2px solid ${color.core.black};
            border-bottom: 2px solid ${color.pagetype[1].green.medium};
          }
        }
      }
    }
  }
`;

export default StyledFooter;
