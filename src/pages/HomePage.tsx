import HeroSection from "../components/home/HeroSection";
import ContinueWatching from "../components/home/ContinueWatching";
import MostPopular from "../components/home/MostPopular";

function HomePage() {
  return (
    <main>
      <div className="bg-on-background md:bg-background min-h-screen">
        <HeroSection />
        <ContinueWatching />
        <MostPopular />
      </div>
    </main>
  );
}

export default HomePage;
