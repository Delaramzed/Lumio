function ContinueWatching() {
  return (
    <section className="mt-10">

      <div className="mb-5 flex items-center justify-between">
        <button className="flex items-center gap-2 text-sm font-medium text-text-secondary transition-colors hover:text-primary">
          <span>مشاهده همه</span>
          <span className="text-base">←</span>
        </button>

        <h2 className="text-xl font-bold text-text-primary">
          ادامه تماشا
        </h2>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

      
        <div className="relative h-52 overflow-hidden rounded-2xl">

         
          <img
            src="../src/assets/The-Last-of-Us.jpg"
            alt="The Last of Us"
            className="h-full w-full object-cover"
          />

         
          <div className="absolute inset-0 bg-overlay" />

          {/* Content */}
          <div className="absolute inset-x-0 bottom-0 p-4">

            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-neutral-1">
                The Last of Us
              </h3>

              <span className="text-sm text-neutral-1">
                ۶۰٪
              </span>
            </div>

            <p className="mt-1 text-xs text-neutral-3">
              قسمت ۵
            </p>

          
            <div className="mt-3 h-1.5 rounded-full bg-neutral-5">
              <div className="h-full w-[60%] rounded-full bg-primary" />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default ContinueWatching;