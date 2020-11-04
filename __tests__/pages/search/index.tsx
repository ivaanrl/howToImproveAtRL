import React from 'react';
import { render } from '../../../test/testsUtils';
import SearchPage from '../../../pages/search';

jest.mock('next/router', () => ({
  useRouter: jest.fn(() => ({
    query: {},
  })),
}));

const searchResults = [];

test('renders properly', () => {
  const {} = render(<SearchPage searchResults={searchResults} />);
  //will write tests later when interface is finished
  //and labels are added
});
