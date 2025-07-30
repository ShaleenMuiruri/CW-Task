import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import SearchBar from "@/components/shared/SearchBar";

export default function Header() {
    return (
      <header className="flex items-center justify-between px-6 py-4 border-b border-gray-500" role="banner">
        <div className="flex items-center gap-2">
          <img 
            src="/task1/logo.png" 
            alt="Worctionary logo" 
            className="w-4 h-4" 
          />
          <h1 className="text-white font-semibold">Worctionary</h1>
        </div>
  
        <nav className="flex items-center gap-4" role="navigation" aria-label="Main navigation">
          <SearchBar
            initialValue=""
            onSearch={() => {}}
            placeholder="Search..."
            className="bg-gray-800 py-0 w-64"
          />
          <Avatar 
            style={{ width: "32px", height: "32px" }}
            aria-label="User profile"
          >
            <AvatarImage 
              src="/avatar.jpg" 
              alt="User profile picture"
            />
            <AvatarFallback aria-label="User">U</AvatarFallback>
          </Avatar>
        </nav>
      </header>
    );
  }
