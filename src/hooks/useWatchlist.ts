"use client";

function useWatchlist() {
  const watchlist = localStorage.getItem("watchlist");

  if (!watchlist) {
    return { movies: null, tvShows: null };
  } else {
    const parsedWatchlist = JSON.parse(watchlist);

    return parsedWatchlist;
  }
}

export default useWatchlist;
