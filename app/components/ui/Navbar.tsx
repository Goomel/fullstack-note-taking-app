import UserAccountNavbar from "./UserAccountNavbar";

const Navbar = async () => {
  return (
    <nav className="flex w-full items-center justify-between bg-white p-4 shadow-md">
      <span>Your notes</span>
      <UserAccountNavbar />
    </nav>
  );
};

export default Navbar;
