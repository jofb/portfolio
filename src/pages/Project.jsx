import { motion } from "framer-motion";

function Project(props) {
  const project = props.project;
  const images = [
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
  ];

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
      <p className="text-gray-300 sm:text-lg">{s}</p>
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

  return (
    <motion.div
      className="overflow-x-hidden bg-slate-800"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2, ease: "easeIn" }}
    >
      <section className="pl-8 md:pl-16 pr-8 md:pr-20 pt-8">
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
        {/* <motion.div
          animate={animDefault}
          initial={animInitBody}
          transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
        > */}
        {body}
        {/* </motion.div> */}
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
// {
//   /* <ImageGallery items={images} /> */
// }
// {
//   /* <div className="">
//   <Carousel className="m-auto" width={"50%"}>
//     <div>
//       <img
//         src="https://heapsgoodpackaging.com.au/cdn/shop/articles/HG_Blog_-_Why_We_Need_To_Save_The_Bees_685dacc4-ce36-497f-8abd-ee84b0f2179f.png"
//         alt=""
//       />
//     </div>
//     <div>
//       <img
//         src="https://heapsgoodpackaging.com.au/cdn/shop/articles/HG_Blog_-_Why_We_Need_To_Save_The_Bees_685dacc4-ce36-497f-8abd-ee84b0f2179f.png"
//         alt=""
//       />
//     </div>
//   </Carousel>
// </div> */
// }
// {
//   /* then some images */
// }
// {
//   /* then some paragraphs */
// }
export default Project;
