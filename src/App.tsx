import { ThemeProvider } from "styled-components";
import Blog from "./pages/Blog";
import { GlobalStyles } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Issues from "./pages/issues";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/issues" element={<Issues />} />
          <Route path="/" element={<Blog />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
