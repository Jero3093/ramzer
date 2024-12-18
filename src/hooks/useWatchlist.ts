"use client";

function useWatchlist() {
  const watchlist = localStorage.getItem("watchlist");

  if (!watchlist) {
    return null;
  } else {
    const parsedWatchlist = JSON.parse(watchlist);

    return parsedWatchlist;
  }
}

export default useWatchlist;
