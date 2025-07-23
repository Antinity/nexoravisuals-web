import BackgroundGlow from "../components/BackgroundGlow";
//eslint-disable-next-line
import { motion } from "framer-motion";
import AnimateIn from "../components/AnimateIn";
import { Link } from "react-router-dom";

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
          {/* CTA */}
          <section className="py-24 text-center px-4 text-white">
            <AnimateIn>
              <h2 className="text-5xl font-bold mb-4">
                Now that we have your{" "}
                <span className="text-green-400">attention</span>...
              </h2>
              <p className="text-zinc-300 mb-8 max-w-sm mx-auto">
                Let us demonstrate what your content will look like when you
                start working with us.
              </p>
              <Link to="/workflow">
                <div
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 sm:px-8 py-3 sm:py-4 rounded-2xl border border-white/10 hover:bg-white/10 transition font-semibold text-sm sm:text-base"
                >
                  See our workflow →
                </div>
              </Link>
            </AnimateIn>
          </section>
        </AnimateIn>

        <BackgroundGlow
          y="10%"
          size={800}
          blurRadius={200}
          color="#553F99"
          animated
        />
      </div>
    </motion.div>
  );
}
