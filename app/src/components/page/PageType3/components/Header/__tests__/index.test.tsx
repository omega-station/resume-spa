import { MockedProvider } from '@apollo/react-testing';
import { cleanup, render } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import Header from '..';
import { cache } from 'utility/apollo';
import defaults from '../defaults';
import mocks from '../mocks';

afterEach(cleanup);

describe('Header', () => {
  it('should render with required props', () => {
    const component = render(
      <MockedProvider mocks={mocks} addTypename={false} cache={cache}>
        <MemoryRouter>
          <Header section={defaults.section} isMenuOpen={defaults.isMenuOpen} onClickMenuItem={defaults.onClickMenuItem} onClickMenuToggle={defaults.onClickMenuToggle} />
        </MemoryRouter>
      </MockedProvider>
    );
    expect(component).toMatchSnapshot();
  });
});
