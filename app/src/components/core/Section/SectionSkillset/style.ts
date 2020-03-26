import styled from '@emotion/styled';
import { color } from '../../../../utility/constant';

const StyledSection = styled.div`
  .skillset {
    &:not(:last-of-type) {
      margin: 0 0 30px;
    }

    > div {
      display: flex;

      &:not(:first-of-type) {
        margin: 2px 0 0;
      }

      &.head {
        font-size: 1.3rem;
        font-weight: 600;
        text-align: center;
      }

      &.head,
      &.body {
        span {
          display: inline-block;
          padding: 5px;
          font-size: 1.2rem;
          line-height: 1.3em;
          overflow-wrap: anywhere;

          &:not(:first-of-type) {
            margin: 0 0 0 2px;
          }

          &:first-of-type,
          &.proficiency {
            font-weight: 600;
          }

          &:first-of-type {
            flex-basis: 33.33%;
            min-width: 140px;
          }

          &:last-of-type {
            flex-basis: 66.66%;
          }

          &.proficiency i {
            margin-right: 6px;
            color: ${color.black};
            font-size: 0.93rem;
            font-style: normal;
            letter-spacing: -0.1em;
          }
        }
      }
    }
  }
`;

export default StyledSection;
