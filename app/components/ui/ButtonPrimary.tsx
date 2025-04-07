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
        "h-10 rounded-md bg-indigo-600 px-4 text-sm font-medium text-white transition-colors hover:bg-indigo-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 disabled:cursor-not-allowed disabled:opacity-60 lg:rounded-lg lg:px-4",
        className,
      )}
      {...buttonProps}
    >
      {children}
    </button>
  );
};

export default ButtonPrimary;
