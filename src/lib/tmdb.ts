export interface TmdbSeries {
  id: number;
  name: string;
  original_name: string;
  first_air_date: string;
  vote_average: number;
  poster_path: string | null;
  genre_ids: number[];
}

interface SeriesResponse {
  results: TmdbSeries[];
}

export async function getPopularSeries(
  signal?: AbortSignal,
): Promise<TmdbSeries[]> {
  const token = import.meta.env.VITE_TMDB_READ_TOKEN;

  if (!token) {
    throw new Error("توکن TMDB تنظیم نشده است.");
  }

  const response = await fetch(
    "https://api.themoviedb.org/3/tv/popular?language=en-US&page=1",
    {
      signal,
      headers: {
        Authorization: `Bearer ${token}`,
        accept: "application/json",
      },
    },
  );

  if (!response.ok) {
    throw new Error(`دریافت سریال‌ها ناموفق بود: ${response.status}`);
  }

  const data: SeriesResponse = await response.json();
  return data.results;
}
