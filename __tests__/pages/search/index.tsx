import React from 'react';
import { render } from '../../../test/testsUtils';
import SearchPage from '../../../pages/search';

const mockRouterPush = jest.fn();

jest.mock('next/router', () => ({
  useRouter: jest.fn(() => ({
    query: {},
    push: mockRouterPush,
  })),
}));

const searchResults = [];
const total_count = 0;

test('renders properly', () => {
  const {} = render(
    <SearchPage searchResults={searchResults} total_count={total_count} />,
  );
  //will write tests later when interface is finished
  //and labels are added
});
