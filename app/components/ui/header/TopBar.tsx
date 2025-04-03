import UserAccountNavbar from "@/app/components/ui/UserAccountNavbar";
import SearchInput from "@/app/components/ui/header/SearchInput";

const TopBar = async () => {
  return (
    <nav className="flex w-full items-center justify-between border-b border-gray-300 bg-white p-4 lg:h-20">
      <span>All notes</span>
      <div className="flex items-center gap-4">
        <SearchInput />
        <UserAccountNavbar />
      </div>
    </nav>
  );
};

export default TopBar;
