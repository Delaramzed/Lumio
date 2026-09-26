function HeroSection() {
  return (
    <section className="relative min-h-125 overflow-hidden rounded-xl">
     
      <div className="absolute inset-0">
        <img
          src=""
          alt="Featured movie"
          className="h-full w-full object-cover"
        />

       
        <div className="absolute inset-0 bg-overlay-dark" />
      </div>

      {/* Slider Controls */}
      <button
        className="absolute left-4 top-1/2 z-20 flex h-10 w-10
          -translate-y-1/2 items-center justify-center
          rounded-full border border-white/20 bg-black/30
          text-xl text-white transition hover:bg-black/50"
      >
        ←
      </button>

      <button
        className="absolute right-4 top-1/2 z-20 flex h-10 w-10
          -translate-y-1/2 items-center justify-center
          rounded-full border border-white/20 bg-black/30
          text-xl text-white transition hover:bg-black/50"
      >
        →
      </button>

      {/* Movie Content */}
      <div
        className="relative z-10 flex min-h-125 items-end
          justify-between px-6 pb-10 lg:px-8"
      >
       
        <div className="max-w-lg">
          <h1 className="text-3xl font-bold text-white md:text-4xl">
            Dune: Part Two
          </h1>

          <p className="mt-3 max-w-md text-sm leading-6 text-white/80">
            ادامه داستان پل آتریدس و مبارزه او برای نجات مردم آراکیس
          </p>

        
          <div className="mt-5 flex gap-3">
            <button
              className="rounded-full bg-primary px-5 py-2.5
                text-sm font-medium text-on-primary
                transition hover:bg-primary-hover"
            >
              تماشا
            </button>

            <button
              className="rounded-full border border-white/25
                bg-black/20 px-5 py-2.5 text-sm font-medium
                text-white transition hover:bg-white/10"
            >
              + افزودن به لیست
            </button>
          </div>
        </div>

        <div className="flex flex-col items-end gap-2 text-sm">
          <span className="text-lg font-bold text-rating">
            ★ 8.6
          </span>

          <div className="flex gap-2 text-white/80">
            <span>2024</span>
            <span>•</span>
            <span>2h 46m</span>
          </div>
        </div>
      </div>

      {/* Slider Indicators */}
      <div
        className="absolute bottom-4 left-1/2 z-20
          flex -translate-x-1/2 gap-1.5"
      >
        <span className="h-1.5 w-6 rounded-full bg-primary" />
        <span className="h-1.5 w-2 rounded-full bg-white/40" />
        <span className="h-1.5 w-2 rounded-full bg-white/40" />
      </div>
    </section>
  );
}

export default HeroSection;