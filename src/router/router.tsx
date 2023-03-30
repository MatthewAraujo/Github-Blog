import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Blog from "../pages/Blog";
import Issues from "../pages/issues";

export function ReactRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/issues" element={<Issues />} />
        <Route path="/" element={<Blog />} />
      </Routes>
    </Router>
  );
}
