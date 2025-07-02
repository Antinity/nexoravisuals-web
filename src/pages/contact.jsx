import BackgroundGlow from "../components/BackgroundGlow";
//eslint-disable-next-line
import { motion } from "framer-motion";

const pageVariants = {
  initial: {
    opacity: 1,
    y: '10%',
    filter: "blur(20px)",
  },
  animate: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 1,
    y: '-10%',
    filter: "blur(20px)",
    transition: {
      duration: 0.4,
      ease: "easeIn",
    },
  },
};

export default function About() {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="min-h-screen flex flex-col items-center justify-center bg-background text-white font-sans relative z-0">
        <header className="mb-10 text-center">
          <h1 className="text-5xl font-bold m-0">contact</h1>
          <p className="text-2xl mt-4">under construction</p>

          <BackgroundGlow size={400} blurRadius={200} />
        </header>
      </div>
    </motion.div>
  );
}
