import SignInForm from "@/app/components/form/SignInForm";

const isLoggedIn = false;

export default async function Home() {
	return isLoggedIn ? (
		<p>You are logged in</p>
	) : (
		<div className="flex items-center justify-center h-screen bg-sky-100">
			<SignInForm />
		</div>
	);
}
