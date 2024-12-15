import { MovieInt, TvInt } from "@/utils/Interfaces";

function ResultView({
  movies,
  tv,
}: {
  movies: MovieInt | null;
  tv: TvInt | null;
}) {
  return (
    <section className="m-auto flex flex-col items-center gap-4 p-6 text-center text-pretty md:flex-row md:gap-7">
      <img
        src={`https://image.tmdb.org/t/p/w500${
          movies ? movies?.poster_path : tv?.poster_path
        }`}
        alt={`${movies ? movies?.title : tv?.name} original poster`}
        className="rounded-md shadow-md shadow-red-400 w-full max-w-96"
      />
      <section className="flex flex-col items-center gap-4 md:gap-6 ">
        <h1 className="text-2xl leading-relaxed font-semibold">
          {movies ? movies?.title : tv?.name}
        </h1>
        <p className="leading-loose max-w-lg md:text-lg">
          {movies ? movies?.overview : tv?.overview}
        </p>
        <span className="text-zinc-600">
          {movies?.overview === "" && "No overview available"}
          {tv?.overview === "" && "No overview available"}
        </span>
        <footer className="text-xl flex flex-col items-center gap-4">
          <p>
            <strong className="text-rose-500">Release Date:</strong>{" "}
            {movies ? movies?.release_date : tv?.first_air_date}
          </p>
          <p>
            <strong className="text-rose-500">Vote Average:</strong>{" "}
            {movies
              ? Math.floor(movies?.vote_average)
              : Math.floor(tv?.vote_average ? tv?.vote_average : 0.0)}{" "}
            / 10
          </p>
        </footer>
      </section>
    </section>
  );
}

export default ResultView;
