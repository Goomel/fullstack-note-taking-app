import SignUpForm from "../components/form/SignUpForm";

// const isLoggedIn = false;

export default async function Home() {
	// if (!isLoggedIn) {
	// return {
	// notFound: true,
	// };
	// }

	return (
		<div className="flex items-center justify-center h-screen bg-sky-100">
			<SignUpForm />
		</div>
	);
}
