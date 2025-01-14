import { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

const Input = ({ ...inputProps }: InputProps) => {
	return (
		<input
			{...inputProps}
			className="bg-gray-50 text-black px-4 py-3 lg:px-5 lg:py-4 focus:ring-sky-500 focus:ring-1 focus:outline-none rounded-sm lg:rounded-md w-full"
		/>
	);
};

export default Input;
