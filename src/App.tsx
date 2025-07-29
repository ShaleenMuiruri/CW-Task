import Header from "./components/landing/Header";
import Hero from "./components/landing/Hero";
import TagList from "./components/landing/TagList";
import { TAGS } from "@/constants/tags";

export default function App() {
  return (
    <main className="bg-[#121417] min-h-screen text-white">
      <Header />
      <Hero />
      <TagList title="Trending" tags={TAGS} />
      <TagList title="For you" tags={TAGS} />
    </main>
  );
}
