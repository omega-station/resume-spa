import styled from '@emotion/styled';
import { viewport } from '../../../utility/constant';

const StyledMasthead = styled.div`
  .ascii {
    display: flex;
    flex-direction: column;
    align-items: center;
    user-select: none;

    pre {
      font-family: monospace;
      text-align: center;
      white-space: pre;
    }

    &.ascii-desktop {
      display: none;
    }

    @media (min-width: ${viewport.tablet.landscape[0]}) {
      &.ascii-mobile {
        display: none;
      }

      &.ascii-desktop {
        display: block;
      }
    }
  }
`;

export default StyledMasthead;
