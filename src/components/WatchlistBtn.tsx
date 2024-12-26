"use client";

import { MovieInt, TvInt } from "@/utils/Interfaces";

function WatchlistBtn({
  movies,
  tv,
}: {
  movies: MovieInt | null;
  tv: TvInt | null;
}) {
  const handleAddToWatchlist = async () => {
    const watchlist = localStorage.getItem("watchlist");

    if (!watchlist) {
      localStorage.setItem(
        "watchlist",
        JSON.stringify(
          movies
            ? { movies: [movies], tvShows: [] }
            : { movies: [], tvShows: [tv] }
        )
      );
    } else {
      const parsedWatchlist = JSON.parse(watchlist);

      if (movies) {
        const list = parsedWatchlist?.movies;

        const alreadyInList = list.find((e: MovieInt) => e?.id === movies?.id);

        if (!alreadyInList) {
          const newList = [...list, movies];

          localStorage.setItem(
            "watchlist",
            JSON.stringify({
              movies: newList,
              tvShows: parsedWatchlist?.tvShows,
            })
          );
        }
      } else if (tv) {
        const list = parsedWatchlist?.tvShows;
        const alreadyInList = list.find((e: TvInt) => e?.id === tv?.id);
        const newList = [...list, tv];


        if (!alreadyInList) {

        localStorage.setItem(
          "watchlist",
          JSON.stringify({ movies: parsedWatchlist?.movies, tvShows: newList })
        );
      }
      }
    }
  };

  return (
    <button
      className={`w-80 h-14 grid place-items-center border-2 ${
        movies ? "border-sky-400" : "border-red-400"
      } rounded-md mt-5 p-1 hover:scale-105 transition-all`}
      onClick={() => handleAddToWatchlist()}
    >
      <div
        className={`w-full h-full ${
          movies ? "bg-sky-400 text-black" : "bg-red-400"
        } rounded-md grid place-items-center`}
      >
        Add to Watchlist
      </div>
    </button>
  );
}

export default WatchlistBtn;
