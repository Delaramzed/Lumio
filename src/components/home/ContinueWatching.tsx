import { motion } from "motion/react";
function ContinueWatching() {
  return (
    <section className="mt-10">
      <div className="mb-5 flex items-center justify-between">
        <button className="text-text-secondary hover:text-primary flex items-center gap-2 text-sm font-medium transition-colors">
          <span>مشاهده همه</span>
          <span className="text-base">←</span>
        </button>

        <h2 className="text-text-primary text-xl font-bold">ادامه تماشا</h2>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <motion.div
          className="relative h-52 overflow-hidden rounded-2xl"
          whileHover={{ y: -6, scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <img
            src="../src/assets/The-Last-of-Us.jpg"
            alt="The Last of Us"
            className="h-full w-full object-cover"
          />

          <div className="bg-overlay absolute inset-0" />

          {/* Content */}
          <div className="absolute inset-x-0 bottom-0 p-4">
            <div className="flex items-center justify-between">
              <h3 className="text-neutral-1 font-semibold">The Last of Us</h3>

              <span className="text-neutral-1 text-sm">۶۰٪</span>
            </div>

            <p className="text-neutral-3 mt-1 text-xs">قسمت ۵</p>

            <div className="bg-neutral-5 mt-3 h-1.5 rounded-full">
              <div className="bg-primary h-full w-[60%] rounded-full" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default ContinueWatching;
