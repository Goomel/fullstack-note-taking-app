import { twMerge } from "tailwind-merge";

type ButtonPrimaryProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
	children: React.ReactNode;
	className?: string;
};

const ButtonPrimary = ({
	children,
	className,
	...buttonProps
}: ButtonPrimaryProps) => {
	return (
		<button
			className={twMerge(
				"px-4 py-2 lg:px-4 lg:py-3 bg-blue-500 hover:bg-blue-400 transition-colors text-white rounded-md lg:rounded-lg disabled:opacity-60 disabled:cursor-not-allowed",
				className
			)}
			{...buttonProps}
		>
			{children}
		</button>
	);
};

export default ButtonPrimary;
