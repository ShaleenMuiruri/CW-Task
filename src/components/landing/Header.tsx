import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import SearchBar from "@/components/shared/SearchBar";

export default function Header() {
    return (
      <header className="flex items-center justify-between px-6 py-4 border-b border-gray-500">
        <div className="flex items-center gap-2">
          <img src="/task1/logo.png" alt="Logo" className="w-4 h-4" />
          <p className="text-white font-semibold text-lg">Worctionary</p>
        </div>
  
        <div className="flex items-center gap-4">
          <SearchBar
            initialValue=""
            onSearch={() => {}}
            placeholder="Search..."
            className="bg-gray-800 py-0 w-64"
          />
          <Avatar style={{ width: "32px", height: "32px" }}>
            <AvatarImage src="/avatar.jpg" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
        </div>
      </header>
    );
  }
