import styled from '@emotion/styled';
import { breakpoint } from '../../../utility/constant';

const StyledContact = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */

  ul {
    display: flex;
    /* align-items: center; */

    &.contact-0 {
      /* align-items: flex-start; */

      li {
        /* &:not(:first-of-type) {
          margin: 0 0 0 10px;
        } */

        &:nth-of-type(2) {
          display: none;
          font-style: normal;
          animation: anim-blink 1.8s infinite;

          @media (min-width: ${breakpoint.desktop[1]}) {
            display: inline;
          }

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
      }
    }

    &.contact-1 {
      /* align-items: flex-end; */

      /* li {
        &:not(:last-of-type) {
          margin: 0 25px 0 0;
        }
      } */
    }
  }
`;

export default StyledContact;
