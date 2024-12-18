import Footer from "@/components/Footer";
import Header from "@/components/Header";
import TypeButton from "@/components/TypeButton";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center text-pretty gap-8 pt-10">
      <Header />
      <h2 className="text-zinc-400 text-xl">
        ¡Choose whatever you want to watch!
      </h2>
      <section className="w-full flex flex-col md:flex-row gap-8 items-center justify-center flex-wrap mt-5 md:gap-12">
        <TypeButton href={"/tv"} title={"TV Shows"} color="#ef4444" />
        <TypeButton href={"/movies"} title={"Movies"} color="#0ea5e9" />
        <TypeButton href={"/watchlist"} title={"Watchlist"} color="#52525b" />
      </section>
      <Footer />
    </main>
  );
}
