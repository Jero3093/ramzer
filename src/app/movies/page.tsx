import Header from "@/components/Header";
import Loader from "@/components/Loader";
import useMovies from "@/hooks/useMovies";
import useRandomResult from "@/hooks/useRandomResult";
import { MovieInt } from "@/utils/Interfaces";

export default async function Movies() {
  const movies = await useMovies();

  const result = useRandomResult<MovieInt>({ list: movies });

  return (
    <main className="min-h-screen flex flex-col items-center text-pretty gap-8 pt-10 md:pt-20">
      <Header />
      {result ? (
        <section>
          <img
            src={`https://image.tmdb.org/t/p/w500${result.poster_path}`}
            alt={`${result.title} original poster`}
          />
          <h1>{result?.title}</h1>
        </section>
      ) : (
        <div className="m-auto flex flex-col items-center gap-4">
          <Loader />
          <p className="text-lg text-zinc-500 font-semibold text-center">
            Finding the best movie for this moment...
          </p>
        </div>
      )}
    </main>
  );
}
