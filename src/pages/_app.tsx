import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "../styles/theme";
import { AppProvider } from "@/context/AppContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </ThemeProvider>
  );
}
