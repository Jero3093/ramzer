import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WatchlistView from "@/components/WatchlistView";

export default function Watchlist() {
  return (
    <main className="min-h-screen flex flex-col items-center text-pretty gap-8 pt-10">
      <Header />
      <WatchlistView />
      <Footer />
    </main>
  );
}
