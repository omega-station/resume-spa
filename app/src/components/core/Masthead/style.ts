import styled from '@emotion/styled';
import { breakpoint } from '../../../utility/constant';

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

    @media (min-width: ${breakpoint.tablet.landscape[0]}) {
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
