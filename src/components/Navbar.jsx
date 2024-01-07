import { Link } from "react-router-dom";

import Contacts from "./Contacts";

function Navbar(props) {
  const projects = props.projects;
  const location = props.location;

  // form navbar from projects, mapping each to a button with a link
  const projectLinks = projects.map((p, i) => (
    <Link to={"/projects/" + (i + 1)} key={i}>
      <button
        className={
          (location === "/projects/" + (i + 1)
            ? "bg-yellow-400 text-black shadow-lg"
            : "text-white") +
          " text-2xl hover:bg-slate-200 hover:text-black hover:shadow-lg transition ease-out delay-50 px-3 p-2 text-left font-medium w-full"
        }
        key={i}
      >
        {p.shortTitle}
      </button>
    </Link>
  ));

  return (
    <nav className="flex flex-col w-min h-full bg-[#334DE0] shadow-2xl whitespace-nowrap">
      <Link to="/">
        <button
          className={
            (location === "/"
              ? "bg-yellow-400 text-black shadow-lg"
              : "text-white") +
            " text-2xl hover:bg-slate-200 hover:text-black hover:shadow-lg transition ease-out delay-50 px-3 p-2 font-medium text-left w-full"
          }
        >
          about
        </button>
      </Link>

      <h1 className="text-4xl w-min text-white font-bold px-3 p-2 select-none after:relative after:block after:left-[110%] after:top-[-40%] after:bg-white after:h-0.5 after:w-14 after:z-20">
        projects
      </h1>

      {projectLinks}

      <Contacts />
    </nav>
  );
}

export default Navbar;
