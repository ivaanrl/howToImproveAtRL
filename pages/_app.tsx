import "../styles/globals.css";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";
import { Provider } from "next-auth/client";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Provider session={pageProps.session}>
        <Component {...pageProps} />
      </Provider>
    </ThemeProvider>
  );
}

export default MyApp;
