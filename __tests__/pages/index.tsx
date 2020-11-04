import React from 'react';
import { render } from '../../test/testsUtils';
import Home from '../../pages/index';

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: () => mockDispatch,
}));

test('renders properly', () => {
  const {} = render(<Home />);
});
