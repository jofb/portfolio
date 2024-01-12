import { motion } from "framer-motion";
import Carousel from "../components/Carousel";

function Project({ project }) {
  const images = project.images;

  // animation
  const animInitTitle = { x: 50, opacity: 0 };
  const animInitBody = { x: 60, opacity: 0 };
  const animDefault = { x: 0, opacity: 1, width: "100%" };

  const body = project.desc.split("\n").map((s, i) => (
    <motion.div
      animate={animDefault}
      initial={animInitBody}
      transition={{ delay: 0.1, duration: 0.6 + i * 0.1, ease: "easeOut" }}
      key={i}
    >
      <p className="text-gray-300 sm:text-lg xl:pr-32">{s}</p>
      <div className="leading-3">
        <br />
      </div>
    </motion.div>
  ));

  const links = project.links.map((s, i) => (
    <a
      href={s}
      key={i}
      className="text-blue-500 underline visited:text-purple-400"
      target="_blank"
    >
      {s}
    </a>
  ));

  const carousel =
    images.length > 0 ? (
      <motion.div
        className="mb-5"
        animate={animDefault}
        initial={animInitTitle}
        transition={{ delay: 0.1, duration: 0.5, ease: "easeOut" }}
      >
        <Carousel slides={images} />
      </motion.div>
    ) : null;

  return (
    <motion.div
      className="overflow-x-hidden bg-slate-800"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2, ease: "easeIn" }}
    >
      <section className="px-6 py-8 md:pl-16 md:pr-20">
        <motion.div
          animate={animDefault}
          initial={animInitTitle}
          transition={{ delay: 0.1, duration: 0.4, ease: "easeOut" }}
        >
          <h1 className="text-gray-200 text-3xl sm:text-4xl mb-1 font-bold">
            {project.title}
          </h1>
        </motion.div>
        <motion.div
          className="mb-5"
          animate={animDefault}
          initial={animInitTitle}
          transition={{ delay: 0.1, duration: 0.5, ease: "easeOut" }}
        >
          <p className="text-gray-500 text-sm font-semibold">
            {project.experience}
          </p>
        </motion.div>

        {carousel}

        {body}

        <motion.div
          animate={animDefault}
          initial={animInitBody}
          transition={{
            delay: 0.1,
            duration: 0.6 + body.length * 0.1,
            ease: "easeOut",
          }}
          className="pt-2"
        >
          <div>{links}</div>
        </motion.div>
      </section>
    </motion.div>
  );
}
export default Project;
