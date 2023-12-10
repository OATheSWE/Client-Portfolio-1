// main routing file
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { projectTypes } from "../constants";
import { LandingPage, PortfolioPage, Website } from "../pages";

export default function AllRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />}>
          <Route index element={<Website />} />
          {projectTypes.map((type) => (
            <Route
              key={type}
              path={`projects/${type}`}
              element={<PortfolioPage projectType={type} />}
            />
          ))}
        </Route>
      </Routes>
    </Router>
  );
}
