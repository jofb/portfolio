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
          " hover:bg-slate-200 hover:text-black hover:shadow-lg transition ease-out delay-50 px-3 p-2 text-center md:text-left md:font-medium w-full"
        }
        key={i}
      >
        {p.shortTitle}
      </button>
    </Link>
  ));

  // FUTURE NOTE : the nav below should be hidden by default, switch to flex in medium, and whne we want to show, make flex
  return (
    <nav className="z-40 flex h-full bg-[#334DE0] shadow-2xl whitespace-nowrap text-3xl font-light flex-col absolute w-full md:flex md:text-2xl md:w-min md:static">
      <Link to="/">
        <button
          className={
            (location === "/"
              ? "bg-yellow-400 text-black shadow-lg"
              : "text-white") +
            " hover:bg-slate-200 hover:text-black hover:shadow-lg transition ease-out delay-50 px-3 p-2 text-center md:font-medium md:text-left w-full"
          }
        >
          about
        </button>
      </Link>

      <h1 className="text-5xl md:text-4xl w-full md:w-min text-white text-center font-bold px-3 p-2 select-none md:text-left md:after:block after:relative after:left-[110%] after:top-[-40%] after:bg-white after:h-0.5 after:w-14 after:z-20">
        projects
      </h1>

      {projectLinks}

      <Contacts />
    </nav>
    // <nav className="flex flex-col h-full bg-[#334DE0] shadow-2xl whitespace-nowrap absolute w-full hidden sm:flex">
    //   <Link to="/">
    //     <button
    //       className={
    //         (location === "/"
    //           ? "bg-yellow-400 text-black shadow-lg"
    //           : "text-white") +
    //         " text-2xl hover:bg-slate-200 hover:text-black hover:shadow-lg transition ease-out delay-50 px-3 p-2 font-medium text-left w-full"
    //       }
    //     >
    //       about
    //     </button>
    //   </Link>

    //   <h1 className="text-4xl w-min text-white font-bold px-3 p-2 select-none after:relative after:block after:left-[110%] after:top-[-40%] after:bg-white after:h-0.5 after:w-14 after:z-20">
    //     projects
    //   </h1>

    //   {projectLinks}

    //   <Contacts />
    // </nav>
  );
}

export default Navbar;
