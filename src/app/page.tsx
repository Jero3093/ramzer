import Header from "@/components/Header";
import TypeButton from "@/components/TypeButton";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center text-pretty gap-8 pt-10 md:pt-20">
      <Header />
      <h2 className="text-zinc-400 text-xl">
        ¡Choose whatever you want to watch!
      </h2>
      <section className="flex flex-col md:flex-row gap-8 items-center mt-5">
        <TypeButton href={"/tv"} title={"TV Shows"} color="#ef4444" />
        <TypeButton href={"/movies"} title={"Movies"} color="#0ea5e9 " />
      </section>
      <footer className="mt-auto mb-10">
        Powered by <strong className="text-sky-300">TMDB</strong> Api
      </footer>
    </main>
  );
}
