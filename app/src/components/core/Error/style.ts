import styled from '@emotion/styled';

const StyledError = styled.div`
  user-select: none;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    perspective: 600px;
    animation: anim-pulse 2s infinite;
  }

  span {
    display: block;
    margin: 0 !important;
    color: darkred !important;
    font-family: 'Courier New', Courier, monospace;
    font-size: 3rem; /* big version */
    font-size: 1rem;
    font-weight: 600;
    line-height: 1em;

    & + span {
      position: relative;
      top: -8px; /* big version */
      top: -0.275em;
      transform: rotateX(250deg) scale(1.05); /* big version */
      transform: rotateX(240deg) scale(1.005);
      opacity: 0.15; /* big version */
      opacity: 0.35;
    }
  }

  @keyframes anim-pulse {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0.05;
    }
  }
`;

export default StyledError;
