import BackgroundGlow from "../components/BackgroundGlow";
//eslint-disable-next-line
import { motion } from "framer-motion";
import AnimateIn from "../components/AnimateIn";
import WorkflowTimeline from "../components/WorkflowTimeline";

const pageVariants = {
  initial: {
    opacity: 1,
    y: "10%",
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
    y: "-10%",
    filter: "blur(20px)",
    transition: {
      duration: 0.4,
      ease: "easeIn",
    },
  },
};

export default function Workflow() {

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="relative min-h-screen bg-background text-white overflow-hidden z-0 py-24 px-4 text-center">
        <AnimateIn delay={0.2}>
          <h1 className="text-5xl font-bold">How we operate</h1>
        </AnimateIn>

        <WorkflowTimeline />

        {/* <AnimateIn delay={0.4}></AnimateIn> */}

        <BackgroundGlow
          y="20%"
          size={800}
          blurRadius={200}
          color="#553F99"
          animated
        />

        <BackgroundGlow
          y="90%"
          size={800}
          blurRadius={200}
          color="#553F99"
          animated
        />
      </div>
    </motion.div>
  );
}
