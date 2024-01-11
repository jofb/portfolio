import { useLocation } from "react-router-dom";
import { useState } from "react";

import projects from "./assets/projects_list.json";

import ProjectRoutes from "./components/ProjectRoutes";
import Navbar from "./components/Navbar";
import Header from "./components/Header";

function App() {
  const [navVis, setNavVis] = useState(true);
  const location = useLocation().pathname;

  const toggleNavBar = () => {
    if (window.innerWidth > 640) return;
    setNavVis(!navVis);
  };
  return (
    <>
      <div className="bg-slate-800 min-h-screen relative">
        <Header navVis={navVis} setNavVis={toggleNavBar} />

        <div className="flex flex-row w-full h-full">
          <Navbar
            projects={projects}
            location={location}
            navVis={navVis}
            setNavVis={toggleNavBar}
          />
          <ProjectRoutes projects={projects} />
        </div>
      </div>
    </>
  );
}

export default App;
