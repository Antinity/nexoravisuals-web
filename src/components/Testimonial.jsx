import { useEffect, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from "framer-motion";

const testimonials = [
  {
    quote: "“Way beyond my expectations. These edits go hard.”",
    name: "👻 @flourishingdavid",
  },
  {
    quote: "“Hooks that slap. Viewer retention went way up.”",
    name: "🐦 @coldenblades",
  },
  {
    quote: "“Best upcoming editor 💯”",
    name: "▶️ @pixeledfx",
  },
];

function TestimonialCarousel() {
  const [[index, direction], setIndex] = useState([0, 0]); // tuple for index + direction

  const paginate = (newDir) => {
    setIndex(([prevIndex]) => {
      const newIndex =
        (prevIndex + newDir + testimonials.length) % testimonials.length;
      return [newIndex, newDir];
    });
  };

  useEffect(() => {
    const timer = setInterval(() => paginate(1), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-32 px-4 text-white text-center overflow-hidden">
      <div className="relative container mx-auto min-h-[240px]">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={index}
            initial={{
              x: direction === 1 ? 100 : -100,
              opacity: 0,
              scale: 0.95,
              filter: "blur(10px)",
            }}
            animate={{
              x: 0,
              opacity: 1,
              scale: 1,
              filter: "blur(0px)",
              transition: { duration: 0.4   , ease: "easeOut" },
            }}
            exit={{
              x: direction === 1 ? -80 : 80,
              opacity: 0,
              scale: 0.9,
              filter: "blur(10px)",
              transition: { duration: 0.4, ease: "easeIn" },
            }}
            className="absolute w-full p-8 rounded-2xl"
          >
            <p className="text-4xl md:text-6xl max-w-5xl mx-auto text-zinc-300 italic leading-relaxed mb-4">
              {testimonials[index].quote}
            </p>
            <span className="text-white font-semibold">{testimonials[index].name}</span>
          </motion.div>
        </AnimatePresence>

        {/* nav buttons */}
        <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-4 z-10">
          <button
            onClick={() => paginate(-1)}
            className="bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full px-4 py-2 text-white/80"
          >
            ❮
          </button>
          <button
            onClick={() => paginate(1)}
            className="bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full px-4 py-2 text-white/80"
          >
            ❯
          </button>
        </div>
      </div>
    </section>
  );
}

export default TestimonialCarousel;
