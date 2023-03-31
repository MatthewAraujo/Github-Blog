import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Blog from "../pages/Blog";
import Issues from "../pages/issues";
import { GithubBlogProvider } from "../contexts/GithubBlogContext";

export function ReactRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/issues/:id" element={<Issues />} />
        <Route
          path="/"
          element={
            <GithubBlogProvider>
              <Blog />
            </GithubBlogProvider>
          }
        />
      </Routes>
    </Router>
  );
}
