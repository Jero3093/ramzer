import Header from "@/components/Header";
import Loader from "@/components/Loader";
import ResultView from "@/components/ResultView";
import Footer from "@/components/Footer";
import useTvShows from "@/hooks/useTvShows";
import useRandomResult from "@/hooks/useRandomResult";
import { TvInt } from "@/utils/Interfaces";

export default async function TV() {
  const movies = await useTvShows();

  const result = useRandomResult<TvInt>({ list: movies });

  console.log(result);

  return (
    <main className="min-h-screen flex flex-col items-center text-pretty gap-8 pt-10">
      <Header />
      {result ? (
        <ResultView movies={null} tv={result} />
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
