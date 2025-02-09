interface AuthFormProps {
	title: string;
	onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
	children: React.ReactNode;
}

export const AuthForm = ({ title, onSubmit, children }: AuthFormProps) => {
	return (
		<form
			onSubmit={onSubmit}
			className="shadow-lg p-6 lg:p-8 max-w-sm mx-auto bg-white space-y-5 rounded-lg text-gray-700"
		>
			<p className="text-center text-lg lg:text-xl mb-2 font-medium">{title}</p>
			{children}
		</form>
	);
};
