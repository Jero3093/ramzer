"use client";

import Link from "next/link";
import useWatchlist from "@/hooks/useWatchlist";
import { MoviesListInt, TvShowsListInt } from "@/utils/Interfaces";

function WatchlistView() {
  const { movies, tvShows } = useWatchlist();

  return (
    <>
      {!movies || !tvShows ? (
        <section className="flex flex-col items-center gap-4 mt-auto text-center">
          <p className="text-xl text-zinc-500">
            There are no items in your watchlist.
          </p>
          <p className="text-lg">
            Click the{" "}
            <strong className="text-blue-500">Add to Watchlist</strong> button
            on any movie or TV show to add it to your watchlist.
          </p>
        </section>
      ) : (
        <section className="w-full grid grid-cols-2 gap-4 p-2">
          <article className="flex flex-col items-center gap-4 md:gap-6">
            <h1 className="text-2xl font-semibold text-sky-500 md:text-4xl">
              Movies
            </h1>
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              {movies.map((item: MoviesListInt) => (
                <Link
                  href={`/movies/${item?.id}`}
                  key={item.id}
                  className="flex flex-col gap-4 max-w-96 hover:scale-105 group transition-all"
                >
                  <img
                    src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                    alt={item.title}
                    className="rounded-lg aspect-auto max-w-72 group-hover:shadow-md group-hover:shadow-sky-400 transition-all"
                  />
                  <h2 className="text-xl line-clamp-1">{item.title}</h2>
                </Link>
              ))}
            </section>
          </article>
          <article className="flex flex-col items-center gap-4 md:gap-6">
            <h1 className="text-2xl font-semibold text-rose-500 md:text-4xl">
              Tv Shows
            </h1>
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              {tvShows.map((item: TvShowsListInt) => (
                <Link
                  href={`/movies/${item?.id}`}
                  key={item.id}
                  className="flex flex-col gap-4 max-w-96 hover:scale-105 group transition-all"
                >
                  <img
                    src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                    alt={item.name}
                    className="rounded-lg aspect-auto max-w-72 group-hover:shadow-md group-hover:shadow-rose-400 transition-all"
                  />
                  <h2 className="text-xl line-clamp-1">{item.name}</h2>
                </Link>
              ))}
            </section>
          </article>
        </section>
      )}
    </>
  );
}

export default WatchlistView;
