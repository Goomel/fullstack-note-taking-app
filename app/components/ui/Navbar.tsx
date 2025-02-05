import { getServerSession } from "next-auth/next";
import { Session } from "next-auth";
import { authOptions } from "@/lib/auth";
import UserAccountNavbar from "./UserAccountNavbar";

const Navbar = async () => {
	const session: Session | null = await getServerSession(authOptions);

	return (
		<nav className="w-full bg-white shadow-md p-4 flex justify-between items-center">
			<span>Your notes</span>
			{session?.user ? <UserAccountNavbar /> : null}
		</nav>
	);
};

export default Navbar;
