import BackgroundGlow from "../components/BackgroundGlow";
import TestimonialCarousel from "../components/Testimonial";
import AnimateIn from "../components/AnimateIn";
//eslint-disable-next-line
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
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

function Home() {
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
      <div>
        <div className="relative min-h-screen bg-background text-white overflow-hidden z-0 py-12">
          <div className="relative">
            {/* hero text */}
            <AnimateIn delay={0.2}>
              <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 pt-24 sm:pt-32">
                <h1 className="text-4xl sm:text-6xl font-bold leading-tight">
                  Turning your viewers into <span className="text-yellow-400">customers</span>{" "}
                </h1>

                <p className="text-lg sm:text-xl text-white/70 mt-4 max-w-xl">
                  Helping you make more $$$ through premium / high<br />converting editing services.
                </p>

                <div className="mt-6 flex gap-4">
                  <a
                    href="https://x.com/NexoraVisuals"
                    className="px-6 py-3 sm:px-8 sm:py-4 border-2 border-white/10 hover:bg-white/10 rounded-2xl text-sm sm:text-base font-semibold transition"
                  >
                    Work with us →
                  </a>
                  <Link
                    to={"/portfolio"}
                    className="px-6 py-3 sm:px-8 sm:py-4 border-2 border-white/10 hover:bg-white/10 rounded-2xl text-sm sm:text-base font-semibold transition"
                  >
                    See our work →
                  </Link>
                </div>
              </div>
            </AnimateIn>

            {/* showreel */}
            <AnimateIn delay={0.5}>
              <div className="mt-24 sm:mt-32 flex justify-center z-10 relative px-4">
                <video
                  src="/showreel.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="rounded-3xl border-2 border-white/10 shadow-xl w-full max-w-[1152px]"
                />
              </div>
            </AnimateIn>

            <BackgroundGlow
              y="90%"
              size={900}
              blurRadius={200}
              color="#553F99"
              animated
            />
          </div>

          {/* what we do */}
          <section className="py-24 text-white text-center px-4">
            <h2 className="text-4xl font-bold mb-12">What We Do</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 md:auto-rows-[1fr] gap-6 max-w-6xl mx-auto text-left">
              <div className="md:col-span-2">
                <AnimateIn delay={0.1}>
                  <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition">
                    <h3 className="text-xl font-semibold mb-2">
                      📦 3D Object Animations
                    </h3>
                    <p className="text-zinc-400">
                      We animate 3D objects that pop in your videos.
                    </p>
                  </div>
                </AnimateIn>
              </div>

              <div className="md:col-span-2 md:row-span-2">
                <AnimateIn delay={0.3}>
                  <div className="bg-white/5 border border-white/10 p-6 hover:bg-white/10 rounded-2xl transition h-full flex flex-col justify-between">
                    <h3 className="text-xl font-semibold mb-2">
                      📱 Long Form › Short Form
                    </h3>
                    <p className="text-zinc-400">
                      We convert your long videos into multiple short,
                      attention-grabbing clips for Reels, Shorts, or TikTok.
                      <br />
                      <br />
                      This makes it easy to share your message in a quick,
                      engaging way that gets more people watching.
                    </p>
                  </div>
                </AnimateIn>
              </div>

              <div className="md:col-span-2">
                <AnimateIn delay={0.4}>
                  <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition">
                    <h3 className="text-xl font-semibold mb-2">
                      🎯 Creative use of elements
                    </h3>
                    <p className="text-zinc-400">
                      We design custom elements in unique ways to make you stand
                      out.
                    </p>
                  </div>
                </AnimateIn>
              </div>

              <div className="md:col-span-2">
                <AnimateIn delay={0.2}>
                  <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition">
                    <h3 className="text-xl font-semibold mb-2">
                      🖼️ Image to Motion
                    </h3>
                    <p className="text-zinc-400">
                      We bring static visuals to life with transitions,
                      animations, etc.
                    </p>
                  </div>
                </AnimateIn>
              </div>

              <div className="md:col-span-2">
                <AnimateIn delay={0.5}>
                  <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition">
                    <h3 className="text-xl font-semibold mb-2">
                      🧠 Addictive Hooks
                    </h3>
                    <p className="text-zinc-400">
                      We edit in patterns that make people keep watching.
                    </p>
                  </div>
                </AnimateIn>
              </div>
            </div>
          </section>

          {/* what we edit */}
          <section className="py-24 text-white text-center px-4">
            <h2 className="text-4xl font-bold mb-10">What We Edit</h2>
            <div className="flex flex-wrap justify-center gap-2 max-w-4xl space-y-4 mx-auto">
              {[
                "🎬 Longform YouTube",
                "🔥 Shorts / Reels / TikToks",
                "📈 Finance & Business",
                "🎙️ Podcasts & Interviews",
                "🎭 Story / Skits",
                "🤝 Brand Content",
                "💡 Educational / Explainers",
              ].map((item, i) => (
                <AnimateIn delay={i / 10} key={i}>
                  <span className="bg-white/5 border border-white/10 text-white py-2 px-4 rounded-full text-sm hover:bg-white/10 transition cursor-default">
                    {item}
                  </span>
                </AnimateIn>
              ))}
            </div>
            <AnimateIn>
              <p className="text-zinc-400 mt-6">
                If you have a different niche in mind, message us and we will
                see what we can do.
              </p>
            </AnimateIn>
          </section>

          <TestimonialCarousel />

          {/* CTA */}
          <AnimateIn delay={0.7}>
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
                  <div className="inline-block px-6 sm:px-8 py-3 sm:py-4 rounded-2xl border border-white/10 hover:bg-white/10 transition font-semibold text-sm sm:text-base">
                    See our workflow →
                  </div>
                </Link>
              </AnimateIn>
            </section>
          </AnimateIn>

          {/* CTA */}
          <section className="py-24 text-center px-4 text-white">
            <AnimateIn>
              <h2 className="text-4xl font-bold mb-4">Want to work with us?</h2>
              <p className="text-zinc-400 mb-8 max-w-xl mx-auto">
                Send us a message and let's create something amazing.
              </p>
              <a
                href="https://x.com/NexoraVisuals"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 sm:px-8 py-3 sm:py-4 rounded-2xl border border-white/10 hover:bg-white/10 transition font-semibold text-sm sm:text-base"
              >
                Message us on X →
              </a>
            </AnimateIn>
          </section>
        </div>
      </div>
    </motion.div>
  );
}

export default Home;
