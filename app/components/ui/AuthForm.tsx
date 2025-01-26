interface AuthFormProps {
	title: string;
	onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
	children: React.ReactNode;
}

export const AuthForm = ({ title, onSubmit, children }: AuthFormProps) => {
	return (
		<form
			onSubmit={onSubmit}
			className="shadow-lg p-6 lg:p-8 max-w-sm mx-auto bg-white space-y-5 rounded-lg text-gray-800"
		>
			<p className="text-center text-lg sm:text-xl lg:text-2xl mb-2 font-medium">
				{title}
			</p>
			{children}
		</form>
	);
};
