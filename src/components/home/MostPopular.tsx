function MostPopular() {
    return(
          <section className="mt-10">
      
      <div className="mb-5 flex items-center justify-between">
         <button className="text-sm text-text-secondary hover:text-primary">
          مشاهده همه ←
        </button>
        <h2 className="text-xl font-bold text-text-primary">
          محبوب‌ترین‌ها
        </h2>       
      </div>

          {/* Cards */}
      <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">

       
        <div className="overflow-hidden rounded-2xl bg-surface">
          <div className="h-64">
            <img
              src="../src/assets/The-Batman.webp"
              alt="The Batman"
              className="h-full w-full object-cover"
            />
          </div>

         
            <h3 className="font-semibold text-text-primary">
              The Batman
            </h3>

           
         
        </div>
           </div>
      </section>
    )
    
}
export default MostPopular;
