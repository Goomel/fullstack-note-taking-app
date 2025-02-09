import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { Session } from "next-auth";
import SignInView from "@/app/views/SignInView";

export default async function Home() {
	const session: Session | null = await getServerSession(authOptions);

	return session?.user ? (
		<p>You are logged in {session.user?.username}</p>
	) : (
		<SignInView />
	);
}
