import type { CatalogItem } from "@/types/catalog";
import SeriesCard from "./SeriesCard";

export default function SeriesGrid({ series }: { series: CatalogItem[] }) {
  return (
    <div
      className="grid grid-cols-3 gap-x-2.5 gap-y-3 min-[480px]:gap-4 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-5 xl:grid-cols-5"
      dir="ltr"
    >
      {series.map((item) => (
        <SeriesCard key={item.id} series={item} />
      ))}
    </div>
  );
}
