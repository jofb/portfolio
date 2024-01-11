import { motion } from "framer-motion";

function About() {
  return (
    <>
      <motion.section
        className="pl-8 md:pl-16 pr-8 md:pr-20 pt-8"
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2, ease: "easeIn" }}
      >
        <motion.div
          animate={{ y: 0, opacity: 1 }}
          initial={{ y: 40, opacity: 0 }}
          transition={{ delay: 0.1, duration: 0.4, ease: "easeOut" }}
        >
          <h1 className="text-gray-300 text-4xl sm:text-5xl mb-5 font-bold">
            Hi, I'm Jordan
          </h1>
        </motion.div>
        <motion.div
          animate={{ y: 0, opacity: 1 }}
          initial={{ y: 50, opacity: 0 }}
          transition={{ delay: 0.1, duration: 0.5, ease: "easeOut" }}
        >
          <p className="text-gray-300 text-lg">
            I am a recent Comp Sci student from Tasmania, Australia. This is my
            portfolio website where some of the things I've worked on can be
            found. I am passionate about learning more about all facets of
            computer science! Including full stack web development, game
            development, and systems programming.
          </p>
          <div className="leading-3">
            <br />
          </div>
          <p className="text-gray-300 text-lg">
            The site is still a work in progress (pictures coming soon). Check
            out some of my projects on the sidebar to the left! (Or on mobile,
            the menu at the top)
          </p>
        </motion.div>
      </motion.section>
    </>
  );
}

export default About;
