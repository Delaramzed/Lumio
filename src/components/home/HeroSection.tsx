import { motion } from "motion/react";

function HeroSection() {
  return (
    <section className="relative min-h-150 overflow-hidden rounded-xl">
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.08, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src="../src/assets/dune (1).jpg"
          alt="Featured movie"
          className="h-full w-full object-cover"
        />

        <div className="bg-overlay-dark absolute inset-0" />
      </motion.div>

      <button className="absolute top-1/2 left-4 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/30 text-xl text-white transition hover:bg-black/50">
        ←
      </button>

      <button className="absolute top-1/2 right-4 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/30 text-xl text-white transition hover:bg-black/50">
        →
      </button>

      {/* Movie Content */}
      <div className="relative z-10 flex min-h-140 items-end justify-between px-6 pb-10 lg:px-8">
        <motion.div
          className="max-w-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h1 className="text-3xl font-bold text-white md:text-4xl">
            Dune: Part Two
          </h1>

          <p className="mt-3 max-w-md text-sm leading-6 text-white/80">
            ادامه داستان پل آتریدس و مبارزه او برای نجات مردم آراکیس
          </p>

          <motion.div
            className="mt-5 flex gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <button className="bg-primary text-on-primary hover:bg-primary-hover rounded-full px-5 py-2.5 text-sm font-medium transition">
              تماشا
            </button>

            <button className="rounded-full border border-white/25 bg-black/20 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-white/10">
              + افزودن به لیست
            </button>
          </motion.div>
        </motion.div>

        <motion.div
          className="flex flex-col items-end gap-2 text-sm"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <span className="text-rating fontbold text-lg">★ 8.6</span>

          <div className="flex gap-2 text-white/80">
            <span>2024</span>
            <span>•</span>
            <span>2h 46m</span>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 gap-1.5">
        <span className="bg-primary h-1.5 w-6 rounded-full" />
        <span className="h-1.5 w-2 rounded-full bg-white/40" />
        <span className="h-1.5 w-2 rounded-full bg-white/40" />
      </div>
    </section>
  );
}

export default HeroSection;
