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

// Watch Types
export interface Episode {
  id: string;
  number: number;
  title: string;
  thumbnailUrl: string;
  duration: number; // minutes
  season: number;
}

export interface VideoPlayerProps {
  movie: Movie;
  videoUrl: string;
}

export interface VideoControlsProps {
  playing: boolean;
  onToggle: () => void;
}

export interface EpisodeCardProps {
  episode: Episode;
  active: boolean;
  onClick: () => void;
}

export interface EpisodePanelProps {
  episodes: Episode[];
  activeId: string;
  onSelect: (id: string) => void;
}

export interface EpisodeInfoProps {
  episode: Episode;
  onNext: () => void;
}
