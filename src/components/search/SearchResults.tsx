import type { CatalogItem } from "@/types/catalog";
import SearchResultCard from "./SearchResultCard";

export default function SearchResults({ items }: { items: CatalogItem[] }) {
  return (
    <div className="mt-3">
      {items.map((item) => (
        <SearchResultCard key={item.id} item={item} />
      ))}
    </div>
  );
}
