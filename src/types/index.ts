// Common Types
export interface Movie {
  id: string;
  title: string;
  posterUrl: string;
  year: number;
  rating: number;
  genre: string[];
}

export interface User {
  id: string;
  name: string;
  avatarUrl?: string;
}
