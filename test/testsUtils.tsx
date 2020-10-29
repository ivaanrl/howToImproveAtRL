import { theme } from '../styles/theme';
import { ThemeProvider } from 'styled-components';
import { render, RenderOptions } from '@testing-library/react';

const EveryProvider = ({ children }) => {
  return <ThemeProvider theme={theme}> {children} </ThemeProvider>;
};

const renderWithProviders = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'queries'>,
) => render(ui, { wrapper: EveryProvider, ...options });

export * from '@testing-library/react';

export { renderWithProviders as render };
