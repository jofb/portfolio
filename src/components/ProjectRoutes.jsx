import { Route, Routes, useLocation } from "react-router-dom";

import { AnimatePresence } from "framer-motion";

import Project from "../pages/Project";
import About from "../pages/About";

function ProjectRoutes({ projects }) {
  const location = useLocation();
  // create each project page
  const pages = projects.map((p, i) => <Project project={p} key={i} />);
  // create routes for each project
  const routes = pages.map((p, i) => (
    <Route path={"/projects/" + (i + 1)} element={p} key={i} />
  ));

  // push on about page
  routes.push(<Route path="/" element={<About />} key="-1" />);

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {routes}
      </Routes>
    </AnimatePresence>
  );
}

export default ProjectRoutes;
