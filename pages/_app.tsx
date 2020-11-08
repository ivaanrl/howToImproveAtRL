import '../styles/globals.css';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { theme, ThemeInterface } from '../styles/theme';
import { Provider as NextAuthProvider } from 'next-auth/client';
import Navbar from '../containers/navbar/navbar';
import { Provider } from 'react-redux';
import { store } from '../redux/store';

const GlobalStyle = createGlobalStyle`

  body{
    background-color: ${(props) => (props.theme as ThemeInterface).bgColorDark}
  }
`;

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <NextAuthProvider session={pageProps.session}>
        <Provider store={store}>
          <Navbar />
          <Component {...pageProps} />
        </Provider>
      </NextAuthProvider>
    </ThemeProvider>
  );
}

export default MyApp;
