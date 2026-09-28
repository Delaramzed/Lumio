import { Star } from "lucide-react";
import { motion } from "motion/react";

function MostPopular() {
  return (
    <section className="mt-10">
      <div className="mb-5 flex items-center justify-between">
        <button className="text-text-secondary hover:text-primary text-sm">
          مشاهده همه ←
        </button>

        <h2 className="text-text-primary text-xl font-bold">محبوب‌ترین‌ها</h2>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
        <motion.div
          className="relative h-64 overflow-hidden rounded-2xl"
          whileHover={{ y: -6, scale: 1.02 }}
          transition={{ duration: 0.8 }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 4, y: 0 }}
        >
          <img
            src="../src/assets/The-Batman.webp"
            alt="The Batman"
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-black" />

          <div className="absolute inset-x-0 bottom-0 p-3 text-white">
            <h3 className="font-semibold">The Batman</h3>

            <div className="mt-1 flex items-center justify-between text-sm">
              <span className="text-text-muted">2022</span>

              <span className="text-rating flex gap-1">
                <Star size={15} />
                8.3
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default MostPopular;
