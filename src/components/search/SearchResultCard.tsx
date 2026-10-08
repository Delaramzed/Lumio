import { ChevronRight, Star } from "lucide-react";
import { CatalogPoster } from "@/components/series/SeriesCard";
import type { CatalogItem } from "@/types/catalog";
export default function SearchResultCard({ item }: { item: CatalogItem }) {
  return (
    <article className="search-result-card" dir="ltr">
      <div className="search-result-poster">
        <CatalogPoster item={item} />
      </div>
      <div className="search-result-info">
        <h3>{item.title}</h3>
        <div className="search-result-meta">
          <span>{item.year}</span>
          <span aria-hidden="true">·</span>
          <span>
            {item.type === "movie"
              ? `${item.duration} min`
              : `${item.episodes} episodes`}
          </span>
          <span aria-hidden="true">·</span>
          <span className="catalog-rating">
            <Star aria-hidden="true" />
            {item.rating.toFixed(1)}
          </span>
        </div>
      </div>
      <ChevronRight
        className="search-result-chevron"
        size={17}
        aria-hidden="true"
      />
    </article>
  );
}
