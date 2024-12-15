import { MovieInt } from "@/utils/Interfaces";

function ResultView({ result }: {result: MovieInt}) {
  return (
    <section className="m-auto flex flex-col items-center gap-4 p-6 text-center text-pretty md:flex-row md:gap-7">
      <img
        src={`https://image.tmdb.org/t/p/w500${result.poster_path}`}
        alt={`${result.title} original poster`}
        className="rounded-md shadow-md shadow-red-400 w-full max-w-96"
      />
      <section className="flex flex-col items-center gap-4 md:gap-6 ">
        <h1 className="text-2xl leading-relaxed font-semibold">
          {result?.title}
        </h1>
        <p className="leading-loose max-w-lg md:text-lg">{result?.overview}</p>
        <footer className="text-xl flex flex-col items-center gap-4">
          <p>
            <strong className="text-rose-500">Release Date:</strong>{" "}
            {result?.release_date}
          </p>
          <p>
            <strong className="text-rose-500">Vote Average:</strong>{" "}
            {Math.floor(result?.vote_average)} / 10
          </p>
        </footer>
      </section>
    </section>
  );
}

export default ResultView;
