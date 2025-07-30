import SearchBar from "../shared/SearchBar";

export default function Hero() {

  return (
    <section 
      className="relative w-full max-w-5xl mx-auto rounded-xl overflow-hidden mt-8"
      aria-labelledby="hero-heading"
    >
      <img 
        src="/task1/hero-bg.png" 
        alt="Heo" 
        className="w-full h-96 object-cover" 
      />
      <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-center px-4">
        <h1 
          id="hero-heading"
          className="text-3xl md:text-5xl font-bold text-white mb-6"
        >
          Search for words, phrases and meanings
        </h1>
        
        <SearchBar
          initialValue={""}
          onSearch={() => {}}
          showButton={true}
          className="w-full max-w-xl mt-6 py-2"
        />
      </div>
    </section>
  );
}
