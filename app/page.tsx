import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import SignInForm from "./components/form/SignInForm";
import { Session } from "next-auth";

export default async function Home() {
	const session: Session | null = await getServerSession(authOptions);

	return session?.user ? (
		<p>You are logged in {session.user?.username}</p>
	) : (
		<div className="flex items-center justify-center h-screen bg-sky-100">
			<SignInForm />
		</div>
	);
}
