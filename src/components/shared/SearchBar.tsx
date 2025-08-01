import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import React, { useState, useEffect } from "react";

interface SearchBarProps {
  initialValue?: string;
  onSearch: (search: string) => void;
  placeholder?: string;
  className?: string;
  showButton?: boolean;
}

const SearchBar: React.FC<SearchBarProps> = ({
  initialValue = "",
  onSearch,
  placeholder = "Type to search...",
  className = "",
  showButton = false,
}) => {
  const [innerValue, setInnerValue] = useState(initialValue);

  useEffect(() => {
    onSearch(innerValue);
  }, [innerValue, onSearch]);

  useEffect(() => {
    setInnerValue(initialValue);
  }, [initialValue]);

  return (
    <div
      className={`flex items-center bg-black px-4 rounded-lg w-full shadow-lg ${className}`}
      role="search"
      aria-label="Search"
    >
      <Search className="text-gray-400 w-5 h-5" aria-hidden="true" />
      <Input
        value={innerValue}
        onChange={(e) => setInnerValue(e.target.value)}
        type="text"
        placeholder={placeholder}
        className="flex-1 bg-transparent border-none text-white placeholder:text-gray-400 focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:border-transparent"
        aria-label="Search input"
      />
      {showButton && (
        <Button className="bg-blue-600 hover:bg-blue-700 text-white ml-4" aria-label="Search button">
          Search
        </Button>
      )}
    </div>
  );
};

export default SearchBar;
