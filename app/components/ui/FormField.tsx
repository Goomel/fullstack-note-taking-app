import { InputHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";

type FormFieldProps = InputHTMLAttributes<HTMLInputElement> & {
	error?: FieldError | undefined;
	label: string;
};

const FormField = ({ error, label, ...inputProps }: FormFieldProps) => {
	return (
		<div className="space-y-1.5">
			<label
				htmlFor={inputProps.name}
				className="ml-1 text-sm font-medium text-gray-700"
			>
				{label}
			</label>
			<input
				{...inputProps}
				id={inputProps.name}
				className="text-sm bg-white border border-gray-200 text-black px-4 py-3 lg:px-5 lg:py-4 focus:ring-sky-500 focus:ring-1 focus:outline-none rounded-md lg:rounded-lg w-full"
			/>
			{error && <p className="text-sm text-red-500">{error.message}</p>}
		</div>
	);
};

export default FormField;
