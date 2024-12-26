"use client";

function useWatchlist() {
  const watchlist =
    typeof window !== "undefined" ? localStorage.getItem("watchlist") : null;

  if (!watchlist) {
    return { movies: null, tvShows: null };
  } else {
    const parsedWatchlist = JSON.parse(watchlist);

    return parsedWatchlist;
  }
}

export default useWatchlist;
