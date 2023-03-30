import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import { ReactRouter } from "./router/router";
import { GithubBlogProvider } from "./contexts/GithubBlogContext";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <GithubBlogProvider>
        <ReactRouter />
      </GithubBlogProvider>
    </ThemeProvider>
  );
}
