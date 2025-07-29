import SearchBar from "../shared/SearchBar";

export default function Hero() {
  const onSearch = (search: string) => {
    console.log(search);
    // implementing the search logic is not required for this task
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto rounded-xl overflow-hidden mt-8">
      <img src="/task1/hero-bg.png" alt="Hero" className="w-full h-96 object-cover" />
      <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-3xl md:text-5xl font-bold text-white">
          Search for words, phrases and meanings
        </h1>
        
        {/* Removed BoxArea108 component and replaced with SearchBar component */}
        <SearchBar
          initialValue={""}
          onSearch={onSearch}
          showButton={true}
          className="w-full max-w-xl mt-6 py-2"
        />
      </div>
    </div>
  );
}
