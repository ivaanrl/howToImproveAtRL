import "../styles/globals.css";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";
import { Provider as NextAuthProvider } from "next-auth/client";
import Navbar from "../components/navbar/navbar";
import { StateProvider } from "../store";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <NextAuthProvider session={pageProps.session}>
        <StateProvider>
          <Navbar />
          <Component {...pageProps} />
        </StateProvider>
      </NextAuthProvider>
    </ThemeProvider>
  );
}

export default MyApp;
