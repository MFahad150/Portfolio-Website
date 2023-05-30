import { motion } from "framer-motion";

const Banner = () => {
  return (
    <section
      id="home"
      className="max-w-contentContainer mx-auto py-10 mdl:py-24 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4"
    >
      <motion.h3
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="text-lg font-titleFont tracking-wide text-textGreen"
      >
        Hi, my name is
      </motion.h3>
      <motion.h1
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-4xl lgl:text-6xl font-titleFont font-semibold flex flex-col"
      >
        Muhammad Fahad
        <span className="text-textDark mt-2 lgl:mt-4">DevOps Engineer</span>
      </motion.h1>
      <motion.p
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="text-base md:max-w-[650px] text-textDark font-medium"
      >
        {" "}
        I'm in 3rd year currently pursuing my bachelor's in{" "}
        <span className="text-textGreen"> Computer Science</span>. Throughout my
        career, I have dedicated myself to honing my skills and expanding my
        knowledge in <span className="text-textGreen">DevOps </span>and{" "}
        <span className="text-textGreen">Cloud Computing</span>. I have
        experience with containerization and orchestration tools like{" "}
        <span className="text-textGreen">Docker</span> and
        <span className="text-textGreen">Kubernetes</span>.{" "}
        <a href="#about">
          <span className="text-textGreen inline-flex relative cursor-pointer h-7 overflow-x-hidden group">
            Learn More
            <span
              className="absolute w-full h-[1px] bg-textGreen left-0 bottom-1
            -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-300"
            ></span>
          </span>
        </a>
      </motion.p>
      <a href="https://github.com/MFahad150" target="_blank">
        <motion.button
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="w-52 h-14 text-sm font-titleFont border border-textGreen rounded-md text-textGreen tracking-wide hover:bg-hoverColor duration-300"
        >
          Check out my Projects
        </motion.button>
      </a>
    </section>
  );
};
export default Banner;
