import BackgroundGlow from "../components/BackgroundGlow";
//eslint-disable-next-line
import { motion } from "framer-motion";
import AnimateIn from "../components/AnimateIn";

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

const videoFiles = ["1.mp4", "2.mp4", "3.mp4", "4.mp4", "5.mp4", "6.mp4"];

export default function Portfolio() {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="relative min-h-screen bg-background text-white overflow-hidden z-0 py-24 px-4">
        <AnimateIn delay={0.2}>
          <h1 className="text-5xl font-bold text-center mb-6">Our Work</h1>
          <p className="text-zinc-400 text-center max-w-xl mx-auto text-lg">
            Real edits. Real results. These are a few from our recent projects.
          </p>
        </AnimateIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto mt-12">
          <AnimateIn delay={0}>
            <div className="lg:col-span-2">
              <video
                src="/1.mp4"
                controls
                className="w-full aspect-video rounded-2xl border border-white/10 shadow-xl"
              />
            </div>
          </AnimateIn>

          {videoFiles.slice(1).map((file, i) => (
            <AnimateIn delay={(i + 1) * 0.1} key={i}>
              <video
                src={`/${file}`}
                controls
                className="w-full aspect-video rounded-2xl border border-white/10 shadow-xl"
              />
            </AnimateIn>
          ))}
        </div>

        <AnimateIn delay={0.7}>
          <p className="text-zinc-500 text-center mt-12 text-sm italic">
            got something similar in mind? let’s make it better 💻🎬
          </p>
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
