import { theme } from '../styles/theme';
import { ThemeProvider } from 'styled-components';
import { render, RenderOptions } from '@testing-library/react';
import { RootState } from '../redux/store';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import faker from 'faker';

const initialState: RootState = {
  contentCreators: [
    { name: 'ivanrl' },
    { name: `${faker.internet.userName}` },
    { name: `${faker.internet.userName}` },
    { name: `${faker.internet.userName}` },
    { name: `${faker.internet.userName}` },
  ],
  searchResults: { searchResults: [] },
};

const configureMockStore = configureStore();
const mockStore = configureMockStore(initialState);

const EveryProvider = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={mockStore}>{children}</Provider>
    </ThemeProvider>
  );
};

const renderWithProviders = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'queries'>,
) => render(ui, { wrapper: EveryProvider, ...options });

export * from '@testing-library/react';

export { renderWithProviders as render };
