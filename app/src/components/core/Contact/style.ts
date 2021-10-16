import styled from '@emotion/styled';
import { viewport } from 'utility/constant';
import { PropsStyled as Props } from './definition';

const StyledContact = styled.div<Props>`
  display: flex;
  flex-direction: column;

  ul {
    display: flex;

    &.contact-0 {
      li {
        &:nth-of-type(2) {
          display: none;
          font-style: normal;
          animation: anim-blink 1.8s infinite;

          @media (min-width: ${props => (props.pageType === 1 ? viewport.desktop[1] : viewport.tablet.portrait[1])}) {
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
  }
`;

export default StyledContact;
