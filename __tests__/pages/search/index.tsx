import React from 'react';
import { render } from '../../../test/testsUtils';
import user from '@testing-library/user-event';
import SearchPage from '../../../pages/search';
import selectEvent from 'react-select-event';

const mockRouterPush = jest.fn();
let mockRouterQueryResult = {};

jest.mock('next/router', () => ({
  useRouter: jest.fn(() => ({
    query: mockRouterQueryResult,
    push: mockRouterPush,
  })),
}));

const searchResults = [];
const total_count = 0;

afterEach(() => {
  jest.clearAllMocks();
  mockRouterQueryResult = {};
});

test('renders properly', () => {
  const { getByLabelText, getByTestId } = render(
    <SearchPage searchResults={searchResults} total_count={total_count} />,
  );

  expect(getByLabelText('category-selector')).toBeInTheDocument();
  expect(getByTestId('category-selector-form')).toBeInTheDocument();

  expect(getByLabelText('training-style-selector')).toBeInTheDocument();
  expect(getByTestId('training-style-selector-form')).toBeInTheDocument();

  expect(getByLabelText('content-creator-selector')).toBeInTheDocument();
  expect(getByTestId('content-creator-selector-form')).toBeInTheDocument();

  expect(getByLabelText('difficulty-selector')).toBeInTheDocument();
  expect(getByTestId('difficulty-selector-form')).toBeInTheDocument();
});

describe('selects render with query values', () => {
  beforeEach(() => {
    mockRouterQueryResult = {
      training_styles: ['Striker', 'Offense'],
      difficulties: ['Easy'],
      contentCreators: ['ivanrl'],
      name: 'Training pack name',
    };
  });

  test('training style select', async () => {
    const { getByText } = render(
      <SearchPage searchResults={searchResults} total_count={total_count} />,
    );

    expect(getByText('Offense')).toBeInTheDocument();
    expect(getByText('Striker')).toBeInTheDocument();
    expect(getByText('Easy')).toBeInTheDocument();
    expect(getByText('ivanrl')).toBeInTheDocument();
  });
});

describe('correct queries are sent', () => {
  test('only with training style', async () => {
    mockRouterQueryResult = {
      training_styles: ['Striker', 'Offense'],
    };
    const { getByLabelText, getByText, getByRole } = render(
      <SearchPage searchResults={searchResults} total_count={total_count} />,
    );
    await selectEvent.select(getByLabelText('training-style-selector'), [
      'Passing',
    ]);
    expect(getByText('Passing')).toBeInTheDocument();
    expect(getByText('Striker')).toBeInTheDocument();
    expect(getByText('Offense')).toBeInTheDocument();

    const searchButton = getByRole('button', { name: /search/i });
    user.click(searchButton);

    expect(mockRouterPush).toHaveBeenCalledTimes(2);
    expect(mockRouterPush).toHaveBeenCalledWith({
      query: {
        searchType: 'training pack',
        name: '',
        contentCreators: [undefined],
        difficulties: [undefined],
        training_styles: ['Striker', 'Offense', 'Passing'],
        page: 0,
      },
    });
  });

  test('only with difficulty', async () => {
    const { getByLabelText, getByText, getByRole } = render(
      <SearchPage searchResults={searchResults} total_count={total_count} />,
    );
    await selectEvent.select(getByLabelText('difficulty-selector'), ['Easy']);
    await selectEvent.select(getByLabelText('difficulty-selector'), ['Hard']);

    expect(getByText('Easy')).toBeInTheDocument();
    expect(getByText('Hard')).toBeInTheDocument();

    const searchButton = getByRole('button', { name: /search/i });
    user.click(searchButton);

    expect(mockRouterPush).toHaveBeenCalledTimes(2);
    expect(mockRouterPush).toHaveBeenCalledWith({
      query: {
        name: '',
        page: 0,
        contentCreators: [undefined],
        difficulties: ['Easy', 'Hard'],
        searchType: 'training pack',
        training_styles: [undefined],
      },
    });
  });

  test('only with content creator', async () => {
    const { getByLabelText, getByText, getByRole } = render(
      <SearchPage searchResults={searchResults} total_count={total_count} />,
    );
    await selectEvent.select(getByLabelText('content-creator-selector'), [
      'ivanrl',
    ]);

    expect(getByText('ivanrl')).toBeInTheDocument();

    const searchButton = getByRole('button', { name: /search/i });
    user.click(searchButton);

    expect(mockRouterPush).toHaveBeenCalledTimes(2);
    expect(mockRouterPush).toHaveBeenCalledWith({
      query: {
        name: '',
        page: 0,
        contentCreators: ['ivanrl'],
        difficulties: [undefined],
        searchType: 'training pack',
        training_styles: [undefined],
      },
    });
  });

  test('only with name', async () => {
    const { getByPlaceholderText, getByRole } = render(
      <SearchPage searchResults={searchResults} total_count={total_count} />,
    );
    user.type(getByPlaceholderText(/search.../i), 'search name');

    const searchButton = getByRole('button', { name: /search/i });
    user.click(searchButton);

    expect(mockRouterPush).toHaveBeenCalledTimes(2);
    expect(mockRouterPush).toHaveBeenCalledWith({
      query: {
        name: 'search name',
        page: 0,
        contentCreators: [undefined],
        difficulties: [undefined],
        searchType: 'training pack',
        training_styles: [undefined],
      },
    });
  });
});
