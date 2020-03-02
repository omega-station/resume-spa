import styled from '@emotion/styled';
import WebFont from 'webfontloader';
import { color } from '../../../utility/constant';
import { padding } from '../../../utility/mixin';

WebFont.load({
  google: {
    families: ['PT+Sans:300,400,500,600'],
  },
});

const StyledPage = styled.div`
  ${padding()};

  * {
    font-family: 'PT Sans', sans-serif;
  }

  main {
    nav {
      position: fixed;
      top: calc(50% - 160px);
      right: 0;

      ul {
        display: flex;
        flex-direction: column;
        align-items: flex-end;

        li {
          &:not(:first-of-type) {
            margin: 1px 0 0;
          }

          &.is-current a,
          a:hover {
            color: ${color.solid.grey.medium};
          }

          &.is-current a {
            background-color: ${color.solid.white};
          }

          &:not(.is-current) a:hover {
            width: 140px;
            color: ${color.solid.white};
            background-color: ${color.solid.grey.light2};
          }

          a {
            display: inline-block;
            width: 110px;
            padding: 17px 25px 13px;
            background-color: ${color.solid.grey.medium};
            border: 1px solid ${color.solid.grey.medium};
            border-radius: 15px 0 0 15px;
            color: ${color.solid.white};
            font-size: 1.7rem;
            font-weight: 600;
            transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out, width 0.3s ease-in-out;
          }
        }
      }
    }
  }
`;

export default StyledPage;
