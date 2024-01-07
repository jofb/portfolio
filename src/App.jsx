import { useState } from "react";

import { useLocation } from "react-router-dom";

import projects from "./assets/projects_list.json";

import ProjectRoutes from "./components/ProjectRoutes";
import Navbar from "./components/Navbar";
import Header from "./components/Header";

function App() {
  const location = useLocation().pathname;

  return (
    <>
      <div className="bg-slate-800 h-screen flex flex-col">
        <Header />
        <div className="flex flex-row w-full h-full">
          <Navbar projects={projects} location={location} />
          <ProjectRoutes projects={projects} />
        </div>
      </div>
    </>
  );
}

export default App;
