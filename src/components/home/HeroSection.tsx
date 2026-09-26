function HeroSection() {
  return (
    <section className="relative min-h-125 overflow-hidden">
      <div className="flex flex-col">
        <img
          src=""
          alt="Featured movie"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <button className="absolute left-4 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-black/30 text-xl text-white">
        ←
      </button>

      <button className="absolute right-4 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-black/30 text-xl text-white">
        →
      </button>

      <div className="relative z-10 flex min-h-125 items-end px-6 pb-10 lg:px-12">
        {/* Movie Content  */}
        <div className="max-w-xl">
          <h1 className="text-4xl font-bold text-text-primary md:text-5xl">
            Movie Title
          </h1>

          <p className="mt-4 text-base text-text-primary">
            توضیح کوتاهی درباره فیلم یا سریال پیشنهادی
          </p>

          <div className="mt-7 flex gap-3">
            <button className="rounded-4xl bg-primary px-6 py-3 font-medium text-text-primary">
              تماشا
            </button>

            <button className="rounded-4xl border border-border bg-on-background px-6 py-3 font-medium text-text-secondary">
              افزودن به لیست +
            </button>
          </div>
        </div>

        <div className="mr-auto flex flex-col items-center gap-4 text-sm text-text-primary">
          <span className="text-xl font-bold">⭐ 8.7</span>

          <div className="flex gap-3">
            <span>2026</span>
            <span>2h 15m</span>
          </div>
        </div>
      </div>
    </section>
  );
}
export default HeroSection;
