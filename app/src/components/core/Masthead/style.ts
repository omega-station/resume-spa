import styled from '@emotion/styled';

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

    @media (min-width: 1360px) {
      // TODO: Add to constants
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
