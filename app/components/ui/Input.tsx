import { HTMLInputTypeAttribute, InputHTMLAttributes } from "react";

type InputProps = {
	type?: HTMLInputTypeAttribute | undefined;
	inputProps: InputHTMLAttributes<HTMLInputElement>;
};

const Input = ({ type = "text", inputProps }: InputProps) => {
	return <input type={type} {...inputProps} />;
};

export default Input;
