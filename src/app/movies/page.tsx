import Header from "@/components/Header";
import Loader from "@/components/Loader";
import Footer from "@/components/Footer";
import useMovies from "@/hooks/useMovies";
import useRandomResult from "@/hooks/useRandomResult";
import { MovieInt } from "@/utils/Interfaces";
import ResultView from "@/components/ResultView";

export default async function Movies() {
  const movies = await useMovies();

  const result = useRandomResult<MovieInt>({ list: movies });

  return (
    <main className="min-h-screen flex flex-col items-center text-pretty gap-8 pt-10">
      <Header />
      {result ? (
        <ResultView result={result} />
      ) : (
        <div className="m-auto flex flex-col items-center gap-4">
          <Loader />
          <p className="text-lg text-zinc-500 font-semibold text-center">
            Finding the best movie for this moment...
          </p>
        </div>
      )}
      <Footer />
    </main>
  );
}
