import BackgroundGlow from "../components/BackgroundGlow";
//eslint-disable-next-line
import { motion } from "framer-motion";
import AnimateIn from "../components/AnimateIn";
import { useEffect } from "react";

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

export default function About() {
    useEffect(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, []);
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="relative min-h-screen bg-background text-white overflow-hidden z-0 py-24 px-4 text-center">
        <AnimateIn delay={0.2}>
          <h1 className="text-5xl font-bold">About us</h1>
        </AnimateIn>

        <AnimateIn delay={0.4}>
          <div className="mt-12 max-w-3xl mx-auto text-white/80 space-y-6 text-base sm:text-xl leading-relaxed text-left">
            <p>
              Nexora Visuals is all about helping creators get exposure by
              making content that actually resonates with viewers. We combine
              clean 3D animations, scroll-stopping edits, and addictive 3D hooks
              to get your audience watching.
            </p>

            <p>
              We can help you turn long videos into short bangers, as well as
              animate 3D objects and UI, accompanies your concept; simple or
              complex we can turn your ideas into real life. We've worked with
              creators in many niches from finance to YouTube, TikTok,
              podcasts, you name it we have done.
            </p>

            <p>
              Our service piece is not just editing, we tell stories through
              motion, we produce content that perform & design that let's the
              visuals shine to separate you from the rest.
            </p>

            <p>
              Our clients say we've gone way beyond expectations, and they are
              correct.
            </p>

            <p>
              So if you are looking for content that looks fire and has the fire
              performance, message us anytime. Slide into the DM's anytime{" "}
            </p>
          </div>
        </AnimateIn>

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
