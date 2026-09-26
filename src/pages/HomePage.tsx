import HeroSection from "../components/home/HeroSection";
import ContinueWatching from "../components/home/ContinueWatching";
import MostPopular from "../components/home/MostPopular";

function HomePage() {
  return (
    <main>
      <div className="min-h-screen bg-background md:ml-64">
        <HeroSection />
        <ContinueWatching />
        <MostPopular />
      </div>
    </main>
  );
}

export default HomePage;
