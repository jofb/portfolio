import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

import projects from "./assets/projects_list.json";

import ProjectRoutes from "./components/ProjectRoutes";
import Navbar from "./components/Navbar";
import Header from "./components/Header";

function App() {
  const [navVis, setNavVis] = useState(true);
  const [loaded, setLoaded] = useState(false);
  const location = useLocation().pathname;

  const toggleNavBar = () => {
    if (window.innerWidth > 640) return;
    setNavVis(!navVis);
  };

  useEffect(() => {
    const imgs = projects
      .map((project, i) => project.images.map((obj, i) => obj.image))
      .flat();

    const loadImage = (src) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = src;

        img.onload = () => {
          setTimeout(() => {
            resolve(src);
          }, 1000);
        };
        img.onerror = (err) => reject(err);
      });
    };

    Promise.all(imgs.map((img, i) => loadImage(img)))
      .then(() => setLoaded(true))
      .catch((err) => console.log(err));
  }, []);

  // TODO pass the loaded state through to project routes, we can use a spinner on each page when its still loading
  // likely will have to split the loaded state into an array of bools, one for each page, so no need to flatten the array of imgs

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
