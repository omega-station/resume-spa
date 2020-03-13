import styled from '@emotion/styled';
import { color } from '../../../../../utility/constant';
import { boxShadow, transition } from '../../../../../utility/mixin';

const StyledHeader = styled.header`
  nav {
    &:first-of-type {
      height: 60px;
      background-color: ${color.solid.grey.medium};

      ul {
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
        height: 100%;
        padding: 0 20px 10px 0;

        li {
          &:not(:last-of-type) {
            margin: 0 10px 0 0;
          }

          a {
            ${boxShadow(0, '2px', '4px', 0, 0.3)};
            display: inline-block;
            padding: 3px 8px 2px;
            background-color: ${color.solid.grey.medium};
            border: 1px solid ${color.solid.grey.medium2};
            border-radius: 5px;
            color: ${color.solid.white};
            font-size: 0.8em;
            font-weight: 600;
            line-height: 1.3em;
            transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out, width 0.3s ease-in-out;
          }

          &.is-current a,
          a:hover {
            color: ${color.solid.grey.medium};
            background-color: ${color.solid.white};
          }
        }
      }
    }

    &:last-of-type {
      position: relative;
      ${boxShadow(0, '2px', '3px')};
      height: 30px;
      background-color: ${color.solid.grey.dark};
      z-index: 100;

      ul {
        width: 100%;
        height: inherit;
        padding: 0 20px 0 0;
        display: flex;
        justify-content: flex-end;
        align-items: center;

        li {
          ${transition('border-bottom')};
          color: ${color.solid.white};
          cursor: pointer;
          font-size: 0.9rem;
          font-weight: 700;
          line-height: 1em;
          border-bottom: 1px solid transparent;

          &:not(:last-of-type) {
            margin: 0 20px 0 0;
          }

          &:hover,
          &.is-current {
            border-bottom-color: ${color.solid.white};
          }

          &.is-current {
            cursor: default;
          }
        }
      }
    }
  }

  > div {
    position: relative;
    height: 160px;
    z-index: 200;

    > div {
      height: 100%;
      box-shadow: 0 3px 4px rgba(0, 0, 0, 0.2), 0 -3px 4px rgba(0, 0, 0, 0.2);

      div {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        padding: 16px 0 14px 20px;
        background: rgb(0, 0, 0);
        background: linear-gradient(90deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 66.66%);
        user-select: none;

        h1,
        h2 {
          color: ${color.solid.white};
          line-height: 0.92em;
        }

        h1 {
          font-size: 3.5rem;
          font-weight: 700;
        }

        h2 {
          margin: 0 0 0 4px;
          font-size: 2.15rem;
          font-weight: 500;
        }
      }
    }
  }
`;

export default StyledHeader;
