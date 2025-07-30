import Header from "./components/landing/Header";
import Hero from "./components/landing/Hero";
import TagList from "./components/landing/TagList";
import { TAGS } from "@/constants/tags";
import { useIsMobile } from "./hooks/use-mobile";

export default function App() {
  const isMobile = useIsMobile();

  return (
    <main className="bg-[#121417] min-h-screen text-white">
      <Header />
      <div className={`mx-auto ${isMobile ? "px-4" : "max-w-5xl px-8"}`}>

      <Hero />
      <TagList title="Trending" tags={TAGS} />
      <TagList title="For you" tags={TAGS} />
      </div>
    </main>
  );
}
