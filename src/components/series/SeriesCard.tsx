import { Star } from "lucide-react";
import type { CatalogItem } from "@/types/catalog";
export function CatalogPoster({ item }: { item: CatalogItem }) {
  if (!item.poster) {
    return (
      <div className="flex h-full items-center justify-center p-2 text-center text-[11px] text-[#a0aaa2]">
        تصویر موجود نیست
      </div>
    );
  }

  return (
    <img
      className="h-full w-full object-cover"
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
      className="relative aspect-[0.605] min-w-0 overflow-hidden rounded-[7px] border border-[#354435] bg-[#10211a] transition-[border-color] duration-200 hover:border-[#67957a]"
      aria-label={`${series.persianTitle}، امتیاز ${series.rating}`}
    >
      <div className="absolute inset-0 overflow-hidden after:pointer-events-none after:absolute after:inset-0 after:bg-[linear-gradient(transparent_48%,#07110bbb_73%,#06100ff5_100%)] after:content-['']">
        <CatalogPoster item={series} />
      </div>
      <div
        className="absolute inset-x-0 bottom-0 px-1.5 pt-1.5 pb-[7px] font-[Arial,sans-serif] min-[480px]:p-2.5 [&>h2]:mb-1.5 [&>h2]:truncate [&>h2]:text-[11px] [&>h2]:font-normal min-[480px]:[&>h2]:text-[12px]"
        dir="ltr"
      >
        <h2 title={series.title}>{series.title}</h2>
        <div className="flex items-center gap-[18px] text-[9px] text-[#a0aaa2] min-[480px]:text-[11px]">
          <span className="inline-flex items-center gap-[3px] whitespace-nowrap text-[#e4e7d8] [&>svg]:size-2.5 [&>svg]:fill-[#d6b77a] [&>svg]:stroke-[#d6b77a]">
            <Star aria-hidden="true" />
            {series.rating.toFixed(1)}
          </span>
          <span>{series.year || "—"}</span>
        </div>
      </div>
    </article>
  );
}
