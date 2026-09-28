import { Star } from "lucide-react";
import { motion } from "motion/react";

const MovieCard = () => {
  return (
    <motion.div
      className="w-48"
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <div className="relative overflow-hidden rounded-xl">
        <img
          src="../src/assets/dune.jpg"
          alt="dune"
          className="w-full cursor-pointer object-cover transition-transform"
        />
      </div>

      <div className="mt-3">
        <h3 className="text-text-primary text-sm font-semibold">
          Dune: Part Two
        </h3>

        <div className="flex flex-row-reverse justify-between md:flex-col">
          <p className="text-text-secondary mt-1 text-xs">2024</p>

          <span className="text-text-secondary flex gap-1 rounded-lg px-2 py-1 text-sm">
            <Star size={13} />
            8.6
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default MovieCard;
