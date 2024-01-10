import { motion } from "framer-motion";

import { Link } from "react-router-dom";

import Contacts from "./Contacts";

function Navbar({ navVis, setNavVis, projects, location }) {
  // form navbar from projects, mapping each to a button with a link
  const projectLinks = projects.map((p, i) => (
    <Link to={"/projects/" + (i + 1)} key={i}>
      <button
        className={
          (location === "/projects/" + (i + 1)
            ? "bg-yellow-400 text-black shadow-lg"
            : "text-white") +
          " hover:bg-slate-200 hover:text-black hover:shadow-lg transition ease-out delay-50 px-3 p-2 text-left sm:font-medium w-full"
        }
        onClick={setNavVis}
        key={i}
      >
        {p.shortTitle}
      </button>
    </Link>
  ));

  const variants = {
    open: {
      height: "100%",
      transition: { duration: 0.4, ease: "easeOut" },
    },
    close: {
      height: 0,
      transition: { duration: 0.3, ease: "easeIn" },
    },
  };

  return (
    <motion.nav
      animate={navVis ? "close" : "open"}
      initial={{ height: 0 }}
      variants={variants}
      className={
        "z-40 flex absolute h-full bg-[#334DE0] overflow-hidden sm:overflow-visible shadow-2xl sm:whitespace-nowrap text-3xl sm:!h-full font-light flex-col w-full sm:text-2xl sm:sticky sm:w-min"
      }
    >
      <Link to="/">
        <button
          className={
            (location === "/"
              ? "bg-yellow-400 text-black shadow-lg"
              : "text-white") +
            " hover:bg-slate-200 hover:text-black hover:shadow-lg transition ease-out delay-50 px-3 p-2 text-left sm:font-medium w-full"
          }
          onClick={setNavVis}
        >
          about
        </button>
      </Link>

      <h1 className="text-5xl mb-2 sm:text-4xl w-full sm:w-min text-white text-left font-bold px-3 p-2 select-none sm:after:block after:relative after:left-[110%] after:top-[-40%] after:bg-white after:h-0.5 after:w-14 after:z-20">
        projects
      </h1>

      {projectLinks}

      <Contacts />
    </motion.nav>
  );
  //   <nav className="flex flex-col h-full bg-[#334DE0] shadow-2xl whitespace-nowrap absolute sm:flex">
  //     <Link to="/">
  //       <button
  //         className={
  //           (location === "/"
  //             ? "bg-yellow-400 text-black shadow-lg"
  //             : "text-white") +
  //           " text-2xl hover:bg-slate-200 hover:text-black hover:shadow-lg transition ease-out delay-50 px-3 p-2 font-medium text-left w-full"
  //         }
  //       >
  //         about
  //       </button>
  //     </Link>

  //     <h1 className="text-4xl w-min text-white font-bold px-3 p-2 select-none after:relative after:block after:left-[110%] after:top-[-40%] after:bg-white after:h-0.5 after:w-14 after:z-20">
  //       projects
  //     </h1>

  //     {projectLinks}

  //     <Contacts />
  //   </nav>
  // );
}

export default Navbar;
