export interface CatalogItem {
  id: string;
  title: string;
  persianTitle: string;
  type: "movie" | "series";
  year: number;
  rating: number;
  genres: string[];
  poster: string;
  duration?: number;
  episodes?: number;
}
