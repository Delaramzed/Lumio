import { ChevronRight, Star } from "lucide-react";
import { CatalogPoster } from "@/components/series/SeriesCard";
import type { CatalogItem } from "@/types/catalog";
export default function SearchResultCard({ item }: { item: CatalogItem }) {
  return (
    <article
      className="flex items-center gap-4 border-b border-[#203329] py-3"
      dir="ltr"
    >
      <div className="aspect-[0.76] w-[78px] shrink-0 overflow-hidden rounded-[7px] border border-[#465238]">
        <CatalogPoster item={item} />
      </div>
      <div className="min-w-0 flex-1 font-[Arial,sans-serif] [&>h3]:mb-2.5 [&>h3]:text-[13px] [&>h3]:font-normal [&>h3]:[overflow-wrap:anywhere] md:[&>h3]:text-[15px]">
        <h3>{item.title}</h3>
        <div className="flex flex-wrap items-center gap-1.5 text-[10px] text-[#b1b9ac] md:text-[12px]">
          <span>{item.year}</span>
          <span aria-hidden="true">·</span>
          <span>
            {item.type === "movie"
              ? `${item.duration} min`
              : `${item.episodes} episodes`}
          </span>
          <span aria-hidden="true">·</span>
          <span className="inline-flex items-center gap-[3px] whitespace-nowrap text-[#e4e7d8] [&>svg]:size-2.5 [&>svg]:fill-[#d6b77a] [&>svg]:stroke-[#d6b77a]">
            <Star aria-hidden="true" />
            {item.rating.toFixed(1)}
          </span>
        </div>
      </div>
      <ChevronRight
        className="ml-auto shrink-0 text-[#e6e8df]"
        size={17}
        aria-hidden="true"
      />
    </article>
  );
}
