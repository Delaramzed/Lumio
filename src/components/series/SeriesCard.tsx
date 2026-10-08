import { Star } from "lucide-react";
import type { CatalogItem } from "@/types/catalog";
export function CatalogPoster({ item }: { item: CatalogItem }) {
  return (
    <img
      src={item.poster}
      alt={`پوستر ${item.persianTitle}`}
      loading="lazy"
      decoding="async"
    />
  );
}
export default function SeriesCard({ series }: { series: CatalogItem }) {
  return (
    <article
      className="series-card"
      aria-label={`${series.persianTitle}، امتیاز ${series.rating}`}
    >
      <div className="series-card-poster">
        <CatalogPoster item={series} />
      </div>
      <div className="series-card-info" dir="ltr">
        <h2 title={series.title}>{series.title}</h2>
        <div className="series-card-meta">
          <span className="catalog-rating">
            <Star aria-hidden="true" />
            {series.rating.toFixed(1)}
          </span>
          <span>{series.year}</span>
        </div>
      </div>
    </article>
  );
}
