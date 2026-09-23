// Common Types
export interface Movie {
  id: string;
  title: string;
  posterUrl: string;
  releaseYear: number;
  rating: number; // 0–10
  genre: string[];
  isFavorite?: boolean;
}

export interface MovieCardProps {
  movie: Movie;
  showRating?: boolean;
}

export interface User {
  id: string;
  name: string;
  avatarUrl?: string;
}
