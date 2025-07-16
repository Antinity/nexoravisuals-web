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

export default function Contact() {

const email = (e) => {
  e.preventDefault();

  const name = document.querySelector('input[name="name"]').value;
  const userEmail = document.querySelector('input[name="email"]').value;
  const message = document.querySelector('textarea[name="message"]').value;

  const subject = encodeURIComponent("New Message from " + name);
  const body = encodeURIComponent(
    `Name: ${name}\nEmail: ${userEmail}\n\n${message}`
  );

  window.location.href = `mailto:nexoravisuals@gmail.com?subject=${subject}&body=${body}`;
};

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="relative min-h-screen bg-background text-white overflow-hidden z-0 py-24 px-4 text-center">
        <AnimateIn delay={0.2}>
          <h1 className="text-5xl font-bold">Let's Talk</h1>
          <p className="text-zinc-400 mt-4 max-w-xl mx-auto text-lg">
            Want scroll-stopping visuals? You’re just a message away.
          </p>
        </AnimateIn>

        <AnimateIn delay={0.3}>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-6">
            <a
              href="https://www.instagram.com/nexora_visualss/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 sm:px-8 py-3 sm:py-4 rounded-2xl border border-white/10 hover:bg-white/10 transition font-semibold text-sm sm:text-base"
            >
              Message us on Instagram →
            </a>
          </div>
        </AnimateIn>

        <AnimateIn delay={0.4}>
          <div className="mt-12 text-zinc-400">
            <span className="text-2xl font-semibold">OR</span>
          </div>
        </AnimateIn>

        <AnimateIn delay={0.5}>
          <form
            action=""
            method="POST"
            className="bg-[rgba(255,255,255,0.02)] p-6 sm:p-8 mt-8 max-w-lg mx-auto space-y-6 rounded-2xl border border-white/10"
          >
            <h3 className="text-xl font-semibold text-white/80 mb-7">
              Send us an email
            </h3>

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full px-6 sm:px-8 py-3 sm:py-4 rounded-2xl border border-white/10 transition font-semibold text-sm sm:text-base focus:outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full px-6 sm:px-8 py-3 sm:py-4 rounded-2xl border border-white/10 transition font-semibold text-sm sm:text-base focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              required
              className="w-full px-6 sm:px-8 py-3 sm:py-4 rounded-2xl border border-white/10 transition font-semibold text-sm sm:text-base focus:outline-none"
            ></textarea>
            <button
              type="submit"
              onClick={email}
              className="cursor-pointer w-full px-6 sm:px-8 py-3 sm:py-4 rounded-2xl border border-white/10 hover:bg-white/10 transition font-semibold text-sm sm:text-base"
            >
              Send Message
            </button>
          </form>
        </AnimateIn>

        <BackgroundGlow
          y="10%"
          size={500}
          blurRadius={200}
          color="#553F99"
          animated
        />
      </div>
    </motion.div>
  );
}
