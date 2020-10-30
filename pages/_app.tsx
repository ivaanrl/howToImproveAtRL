import '../styles/globals.css';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';
import { Provider as NextAuthProvider } from 'next-auth/client';
import Navbar from '../components/navbar/navbar';
import { Provider } from 'react-redux';
import { store } from '../redux/store';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
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
