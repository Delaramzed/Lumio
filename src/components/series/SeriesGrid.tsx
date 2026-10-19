import type { CatalogItem } from "@/types/catalog";
import SeriesCard from "./SeriesCard";

export default function SeriesGrid({ series }: { series: CatalogItem[] }) {
  return (
    <div className="series-grid" dir="ltr">
      {series.map((item) => (
        <SeriesCard key={item.id} series={item} />
      ))}
    </div>
  );
}
